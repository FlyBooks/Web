class war:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        pass

    def __str__(self):
        return '%s血量还剩%d' % (self.name, self.hp)

    def stabSb(self, enemy):
        self.hp += 10
        enemy.hp -= 20
        print('%s捅了%s一刀' % (self.name, enemy.name))
        pass

    def eatPill(self):
        self.hp += 10
        print('%s的血量增加了10g' % (self.name))


xmcx = war('xmcx',100)
ygc = war('ygc',100)

xmcx.stabSb(ygc)