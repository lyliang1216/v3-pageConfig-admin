const { types } = require('./.cz-config.cjs')
const typeList = types.map((item) => item.value)
module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [2, 'always', typeList],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
