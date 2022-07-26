'use strict'

var obsidian = require('obsidian')

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value)
        })
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value))
      } catch (e) {
        reject(e)
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected)
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}

// 配置
const DEFAULT_SETTINGS = {
  scrollToFile: true,
  followScrollToFile: false,
  expandOrCollapse: true
}
// 在文件列表中显示当前打开的文件
const SCROLL_TO_FILE_ICON =
  '<svg viewBox="0 0 100 100" class="feather-crosshair" width="18" height="18"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-crosshair"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg></svg>'
const EXPAND_ICON =
  '<svg width="16" height="16" fill="currentColor" viewBox="0 0 320 512"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>'
const COLLAPSE_ICON =
  '<svg width="16" height="16" fill="currentColor" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg>'

/**
 * 功能
 */
class ProviderBase {
  constructor(plugin) {
    this.plugin = plugin
  }
  // Returns all loaded leaves of the class leafType
  get leaves() {
    return this.plugin.app.workspace.getLeavesOfType(this.leafType)
  }
  // Adds buttons to all leaves.
  addButtons() {
    this.leaves.forEach(leaf => {
      const container = leaf.view.containerEl
      const navContainer = container.querySelector('div.nav-buttons-container')
      if (!navContainer) {
        return null
      }

      this.addButton(leaf, navContainer)
    })
  }
  /**
   * Remove the button from all leaves.
   */
  removeButtons() {
    this.leaves.forEach(leaf => {
      const buttons = this.getButtons(leaf)
      buttons.forEach(button => {
        button.remove()
      })
    })
  }
  /**
   * Get the button for a given leaf, if it exists
   */
  getButtons(leaf) {
    return leaf.view.containerEl.querySelectorAll(
      '.file-explorer-toolbar-button'
    )
  }
}

/**
 * 移动到当前打开的文件功能
 */
class ScrollToFileProvider extends ProviderBase {
  constructor(plugin) {
    super(plugin)
    this.providerType = 'scrollToFile'
    this.buttonClass = 'nav-action-button'
    this.leafType = 'file-explorer'
  }
  // add button to leave
  addButton(leaf, navContainer) {
    const button = this.getButton(leaf)
    if (button) {
      return
    }

    // 如果配置显示移动到文件
    if (this.plugin.settings.scrollToFile) {
      const newIcon = document.createElement('div')
      this.updateButtonIcon(leaf, newIcon)
      newIcon.className = `${this.buttonClass} file-explorer-toolbar-button scroll-to-file`
      this.plugin.registerDomEvent(newIcon, 'click', () => {
        // 执行命令
        this.executeCommand()
      })
      navContainer.appendChild(newIcon)
    }
  }
  // get the button
  getButton(leaf) {
    const buttons = leaf.view.containerEl.querySelectorAll('.scroll-to-file')
    if (buttons && buttons.length > 0) {
      return buttons[0]
    }
    return null
  }
  /**
   * Update icon for given leaf/button to  all.
   */
  updateButtonIcon(leaf, button) {
    if (!button) {
      button = this.getButton(leaf)
    }
    if (button) {
      button.innerHTML = SCROLL_TO_FILE_ICON
      button.setAttribute('aria-label', '在文件列表中显示当前文件')
    }
  }

  // 执行命令
  executeCommand() {
    this.plugin.app.commands.executeCommandById(
      'file-explorer:reveal-active-file'
    )
  }
}

/**
 * 移动到当前打开的文件功能
 */
class ExpandOrCollapseProvider extends ProviderBase {
  constructor(plugin) {
    super(plugin)
    this.providerType = 'expandOrCollapse'
    this.buttonClass = 'nav-action-button'
    this.leafType = 'file-explorer'
    this.isCollapsed = true
  }
  // add button to leave
  addButton(leaf, navContainer) {
    const button = this.getButton(leaf)
    if (button) {
      return
    }

    // 如果配置了展开所有文件夹
    if (this.plugin.settings.expandOrCollapse) {
      // 初始化 isCollapsed
      this.isCollapsed = this.isAllCollapsed(leaf)
      const newIcon = document.createElement('div')
      this.updateButtonIcon(leaf, newIcon)
      newIcon.className = `${this.buttonClass} file-explorer-toolbar-button expand-or-collapse`
      this.plugin.registerDomEvent(newIcon, 'click', () => {
        // 执行命令
        this.executeCommand(leaf, newIcon)
      })
      navContainer.appendChild(newIcon)
    }
  }
  // get the button
  getButton(leaf) {
    const buttons = leaf.view.containerEl.querySelectorAll(
      '.expand-or-collapse'
    )
    if (buttons && buttons.length > 0) {
      return buttons[0]
    }
    return null
  }
  /**
   * Update icon for given leaf/button to  all.
   */
  updateButtonIcon(leaf, button) {
    if (!button) {
      button = this.getButton(leaf)
    }
    if (button) {
      if (this.isCollapsed) {
        button.innerHTML = EXPAND_ICON
        button.setAttribute('aria-label', '展开所有文件夹')
      } else {
        button.innerHTML = COLLAPSE_ICON
        button.setAttribute('aria-label', '关闭所有文件夹')
      }
    }
  }
  // 是否全部关闭状态
  isAllCollapsed(leaf) {
    const items = this.getExplorerItems(leaf)
    return items.every(
      i => !this.explorerItemIsFolder(i) || i.collapsed === true
    )
  }
  /**
   * Get all `fileItems` on explorer view. This property is not documented.
   */
  getExplorerItems(leaf) {
    return Object.values(leaf.view.fileItems)
  }
  /**
   * Ensures given explorer item is a folder and not the root or a note
   */
  explorerItemIsFolder(item) {
    return (
      item.file instanceof obsidian.TFolder &&
      item.file.path !== '/' &&
      item.collapsed !== undefined
    )
  }

  // 执行命令
  executeCommand(leaf, button) {
    // 切换
    this.isCollapsed = !this.isCollapsed
    const items = this.getExplorerItems(leaf)
    items.forEach(item => {
      if (
        this.explorerItemIsFolder(item) &&
        item.collapsed !== this.isCollapsed
      ) {
        item.setCollapsed(this.isCollapsed)
      }
    })
    this.updateButtonIcon(leaf, button)
  }
}

/**
 * 插件设置
 */
class FileExplorerToolbarPluginSettings extends obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin)
    this.plugin = plugin
  }
  display() {
    this.containerEl.empty()
    this.containerEl.createEl('h2', { text: '文件资源管理器工具栏设置' })
    const mainDesc = this.containerEl.createEl('p')
    mainDesc.appendText('欢迎一起学习和交流：')
    mainDesc.appendChild(
      createEl('a', {
        text: '匠果',
        href: 'https://www.jiangguo.net'
      })
    )

    new obsidian.Setting(this.containerEl)
      .setName('在文件列表中显示当前文件')
      .setDesc(
        '如果启动，将会在文件资源管理器上方的工具栏中添加【在文件列表中显示当前文件】功能。'
      )
      .addToggle(toggle => {
        toggle
          .setTooltip('在文件列表中显示当前文件')
          .setValue(this.plugin.settings.scrollToFile)
          .onChange(value =>
            __awaiter(this, void 0, void 0, function* () {
              this.plugin.settings.scrollToFile = value
              this.plugin.onunload()
              this.plugin.allProviders.forEach(provider => {
                provider.addButtons()
              })
              yield this.plugin.saveSettings()
            })
          )
      })

    new obsidian.Setting(this.containerEl)
      .setName('跟随显示当前文件')
      .setDesc('如果启动，在打开文件时文件资源管理器将自动展开并选中文件。')
      .addToggle(toggle => {
        toggle
          .setTooltip('在文件列表中显示当前文件')
          .setValue(this.plugin.settings.followScrollToFile)
          .onChange(value =>
            __awaiter(this, void 0, void 0, function* () {
              this.plugin.settings.followScrollToFile = value
              this.plugin.onunload()
              this.plugin.allProviders.forEach(provider => {
                provider.addButtons()
              })
              yield this.plugin.saveSettings()
            })
          )
      })

    new obsidian.Setting(this.containerEl)
      .setName('展开/关闭全部文件夹')
      .setDesc(
        '如果启动，将会在文件资源管理器上方的工具栏中添加【展开/关闭所有文件夹】功能。'
      )
      .addToggle(toggle => {
        toggle
          .setTooltip('展开/关闭全部文件夹')
          .setValue(this.plugin.settings.expandOrCollapse)
          .onChange(value =>
            __awaiter(this, void 0, void 0, function* () {
              this.plugin.settings.expandOrCollapse = value
              this.plugin.onunload()
              this.plugin.allProviders.forEach(provider => {
                provider.addButtons()
              })
              yield this.plugin.saveSettings()
            })
          )
      })
  }
}

class FileExplorerToolbarPlugin extends obsidian.Plugin {
  constructor() {
    super(...arguments)
    this.settings = DEFAULT_SETTINGS
    this.providerMap = new Map()
    this.providerMap.set('scrollToFile', new ScrollToFileProvider(this))
    this.providerMap.set('expandOrCollapse', new ExpandOrCollapseProvider(this))
  }
  get allProviders() {
    return Array.from(this.providerMap.values())
  }
  onload() {
    return __awaiter(this, void 0, void 0, function* () {
      // Load settings
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData())
      // Initialize
      this.app.workspace.onLayoutReady(() => {
        this.allProviders.forEach(provider => {
          provider.addButtons()
        })
      })

      // 监听打开文件事件，跟随显示文件列表中的当前文件
      this.registerEvent(
        this.app.workspace.on('file-open', file => {
          if (this.settings.followScrollToFile) {
            // 执行命令
            this.providerMap.get('scrollToFile').executeCommand()
          }
        })
      )
      this.registerEvent(
        this.app.workspace.on('layout-change', name => {
          this.allProviders.forEach(provider => {
            provider.addButtons()
          })
        })
      )

      // // 菜单
      // this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => {
      //     const addIconMenuItem = (item) => {
      //         item.setTitle('导出 PDF ');
      //         item.setIcon('hashtag');
      //         item.onClick(() => {
      //             console.log(this.app.workspace)
      //             // 执行命令
      //             // this.app.commands.executeCommandById('open-with-default-app:show');
      //         });
      //     };

      //     menu.addItem(addIconMenuItem);
      // }));

      // Add settings tab
      this.addSettingTab(new FileExplorerToolbarPluginSettings(this.app, this))
      console.log('欢迎使用 File Explorer Toolbar')
    })
  }
  onunload() {
    // Remove all buttons
    this.allProviders.forEach(provider => {
      provider.removeButtons()
    })
  }
  saveSettings() {
    return this.saveData(this.settings)
  }
}

module.exports = FileExplorerToolbarPlugin
