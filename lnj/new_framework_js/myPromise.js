const PENDING = "pending";
const FULLFILLED = "fullfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(handle) {
    if (!this._isFunction(handle)) {
      throw new Error(`Promise resolver ${handle} is not a function`);
    }
    this.status = PENDING;
    handle(this._resolve.bind(this), this._reject.bind(this));
    this.successCallbacks = [];
    this.errorCallbacks = [];
  }

  _isFunction(fn) {
    return typeof fn === "function";
  }

  _resolve(data) {
    this.data = data;

    if (this.status === PENDING) {
      this.status = FULLFILLED;
      if (this.successCallbacks) {
        this.successCallbacks.forEach((success) => success(this.data));
      }
    }
  }

  _reject(reason) {
    this.reason = reason;
    if (this.status === PENDING) {
      this.status = REJECTED;
      if (this.errorCallbacks) {
        this.errorCallbacks.forEach((error) => error(this.reason));
      }
    }
  }

  then(success, error) {
    return new MyPromise((newResolve, newReject) => {
      if (this.status === PENDING) {
        if (this._isFunction(success)) {
          try {
            this.successCallbacks.push((data) => {
              let result = success(data);
              if (result instanceof MyPromise) {
                return result(newResolve, newReject);
              } else {
                newResolve(result);
              }
            });
          } catch (e) {
            newReject(e);
          }
        }

        if (this._isFunction(error)) {
          console.log(error, "error2");
          try {
            this.errorCallbacks.push((data) => {
              let result = error(data);
              if (result instanceof MyPromise) {
                result.then(newResolve, newReject);
              } else {
                newReject(result);
              }
            });
          } catch (e) {
            newReject(e);
          }
        }
      } else {
        if (this._isFunction(success)) {
          if (this.status === FULLFILLED) {
            try {
              let result = success(this.data);
              if (result instanceof MyPromise) {
                result.then(newResolve, newReject);
              } else {
                newResolve(result);
              }
            } catch (e) {
              newReject(e);
            }
          }
          if (this._isFunction(error)) {
            if (this.status === REJECTED) {
              try {
                let result = error(this.reason);
                if (result instanceof MyPromise) {
                  result(newResolve, newReject);
                } else {
                  newReject(result);
                }
              } catch (e) {
                newReject(result);
              }
            }
          }
        }
      }
    });
  }

  catch(onReject) {
    this.then(undefined, onReject);
  }

  static race(list) {
    return new MyPromise(function (resolve, reject) {
      for (let mypromise of list) {
        mypromise.then(function (data) {
          resolve(data);
        });
      }
    });
  }
}
