const fs = require("fs");
const path = require("path");

class CreateProject {
  constructor(rootPath, projectName) {
    this.rootPath = rootPath;
    this.projectName = projectName;
    this.subFiles = ["images", "css", "js", "index.html"];
  }

  initProject() {
    let projectPath = path.join(this.rootPath, this.projectName);

    fs.mkdirSync(projectPath);
    this.subFiles.forEach((filename) => {
      let tmpPath = path.join(projectPath, filename);
      if (path.extname(filename) === "") {
        fs.mkdirSync(tmpPath);
      } else {
        fs.writeFileSync(tmpPath, "");
      }
    });
  }
}

const cp = new CreateProject(__dirname, "taobao");
cp.initProject();
