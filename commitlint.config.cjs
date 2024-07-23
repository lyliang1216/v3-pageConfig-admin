module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性、新功能
        'fix', // 修复bug
        'docs', // 文档修改、注释
        'style', // 代码格式修改(不影响代码运行的变动), 注意不是css修改
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 优化相关，比如提升性能、体验
        'test', // 测试用例修改
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'ci' // 持续集成修改
      ]
    ], // subject 大小写不做校验
    'subject-case': [0]
  }
}
