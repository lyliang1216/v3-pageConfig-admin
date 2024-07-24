module.exports = {
  // 可选类型，和上面commitlint.config.js配置的规则一一对应
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: bug修复' },
    { value: 'refactor', name: 'refactor: 代码重构(既没有bug修复也没有新增功能)' },
    { value: 'style', name: 'style: 不影响代码含义的更改（空格、格式、缺少分号等）, 注意不是css修改' },
    { value: 'build', name: 'build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动' },
    { value: 'chore', name: 'chore: 构建过程或辅助工具的变动' },
    { value: 'ci', name: 'ci: 持续集成修改，比如script命令' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'perf', name: 'perf: 优化相关，比如提升性能、体验' },
    { value: 'test', name: 'test: 测试用例修改' },
    { value: 'revert', name: 'revert: 回滚到上一个版本' }
  ],
  // 消息步骤，正常只需要选择
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n)'
  },
  scopes: [],
  // 跳过问题：修改范围，自定义修改范围，详细描述，issue相关
  allowCustomScopes: true,
  skipQuestions: ['scope', 'customScope', 'body', 'footer'], // subject描述文字长度最长是72
  subjectLimit: 72
}
