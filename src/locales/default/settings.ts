export default {
  common: {
    title: '通用设置',
    chat: {
      title: '聊天设置',
      avatar: {
        title: '头像',
        desc: '自定义头像',
      },
      nickName: {
        title: '昵称',
        desc: '自定义昵称',
        placeholder: '请输入昵称',
      },
    },
    theme: {
      title: '主题设置',
      locale: {
        title: '语言',
        desc: '自定义系统语言',
        auto: '跟随系统',
      },
      primaryColor: {
        title: '主题色',
        desc: '自定义主题色',
      },
      neutralColor: {
        title: '中性色',
        desc: '不同色彩倾向的灰阶自定义',
      },
      backgroundEffect: {
        title: '背景效果',
        desc: '自定义背景效果',
        glow: '光辉',
        none: '无背景',
      },
    },
    system: {
      title: '系统设置',
      clear: {
        title: '清除应用数据',
        desc: '将会清除所有会话数据，包括会话列表，角色列表、会话消息、舞蹈列表等',
        action: '立即清除',
        tip: '操作无法撤销，清除后数据将无法恢复，请慎重操作',
        success: '清除成功',
        alert: '确认清除所有会话消息?',
      },
      reset: {
        title: '重置系统设置',
        desc: '将会重置所有系统设置，包括主题设置、聊天设置、语言模型设置等',
        action: '立即重置',
        success: '重置成功',
        alert: '确认重置所有系统设置?',
        tip: '操作无法撤销，重置后数据将无法恢复，请慎重操作',
      },
      clearCache: {
        title: '清除数据缓存',
        desc: '将会清除应用下载的数据缓存, 包括角色的模型数据，语音数据，舞蹈的模型数据，音频数据等',
        action: '立即清除',
        tip: '操作无法撤销，清除后数据将需要重新下载，请慎重操作',
        success: '清除成功',
        alert: '确认清除所有缓存?',
        calculating: '计算缓存大小中...',
      },
    },
  },
  llm: {
    title: '语言模型',
    aesGcm: '您的秘钥与代理地址等将使用 <1>AES-GCM</1> 加密算法进行加密',
    apiKey: {
      desc: '请填写你的 {{name}} API Key',
      placeholder: '{{name}} API Key',
      title: 'API Key',
    },
    checker: {
      button: '检查',
      desc: '测试 Api Key 与代理地址是否正确填写',
      error: '检查失败',
      pass: '检查通过',
      title: '连通性检查',
    },
    customModelCards: {
      addNew: '创建并添加 {{id}} 模型',
      config: '配置模型',
      confirmDelete: '即将删除该自定义模型，删除后将不可恢复，请谨慎操作。',
      modelConfig: {
        azureDeployName: {
          extra: '在 Azure OpenAI 中实际请求的字段',
          placeholder: '请输入 Azure 中的模型部署名称',
          title: '模型部署名称',
        },
        displayName: {
          placeholder: '请输入模型的展示名称，例如 ChatGPT、GPT-4 等',
          title: '模型展示名称',
        },
        files: {
          extra: '当前文件上传实现仅为一种 Hack 方案，仅限自行尝试。完整文件上传能力请等待后续实现',
          title: '支持文件上传',
        },
        functionCall: {
          extra:
            '此配置将仅开启应用中的函数调用能力，是否支持函数调用完全取决于模型本身，请自行测试该模型的函数调用能力可用性',
          title: '支持函数调用',
        },
        id: {
          extra: '将作为模型标签进行展示',
          placeholder: '请输入模型id，例如 gpt-4-turbo-preview 或 claude-2.1',
          title: '模型 ID',
        },
        modalTitle: '自定义模型配置',
        tokens: {
          title: '最大 token 数',
          unlimited: '无限制',
        },
        vision: {
          extra:
            '此配置将仅开启应用中的图片上传配置，是否支持识别完全取决于模型本身，请自行测试该模型的视觉识别能力可用性',
          title: '支持视觉识别',
        },
      },
    },
    fetchOnClient: {
      desc: '客户端请求模式将从浏览器直接发起会话请求，可提升响应速度',
      title: '使用客户端请求模式',
    },
    fetcher: {
      fetch: '获取模型列表',
      fetching: '正在获取模型列表...',
      latestTime: '上次更新时间：{{time}}',
      noLatestTime: '暂未获取列表',
    },
    helpDoc: '配置教程',
    modelList: {
      desc: '选择在会话中展示的模型，选择的模型会在模型列表中展示',
      placeholder: '请从列表中选择模型',
      title: '模型列表',
      total: '共 {{count}} 个模型可用',
    },
    proxyUrl: {
      desc: '除默认地址外，必须包含 http(s)://',
      title: 'API 代理地址',
    },
    waitingForMore: '更多模型正在 <1>计划接入</1> 中，敬请期待',
  },
  touch: {
    title: '触摸设定',
  },
  tts: {
    title: '语音设置',
    clientCall: {
      title: '客户端调用',
      desc: '启用后，将使用客户端调用语音合成服务，语音合成速度更快，但需要科学上网或具备访问外网的能力',
    },
  },
  systemAgent: {
    title: '系统代理',
    customPrompt: {
      addPrompt: '添加自定义提示',
      desc: '填写后，系统助理将在生成内容时使用自定义提示',
      placeholder: '请输入自定义提示词',
      title: '自定义提示词',
    },
    emotionAnalysis: {
      label: '情感分析模型',
      title: '自动进行情感分析',
      modelDesc: '指定用于情感分析的模型',
    },
  },
  header: {
    desc: '偏好与模型设置',
    global: '全局设置',
    session: '会话设置',
    sessionDesc: '角色设定与会话偏好',
    sessionWithName: '会话设置 · {{name}}',
    title: '设置',
  },
};
