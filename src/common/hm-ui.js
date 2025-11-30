export function createHmUI(app) {
  let nextId = 1

  const hmUI = {
    widget: {
      IMG: "IMG"
    },
    prop: {
      MORE: "MORE",
      VISIBLE: "VISIBLE"
    },
    createWidget(type, param) {
      if (type !== hmUI.widget.IMG) {
        throw new Error(`Unsupported widget type: ${type}`)
      }

      const widget = {
        type,
        id: nextId++,
        param: { ...param },
        visible: true,
        setProperty(prop, value) {
          if (prop === hmUI.prop.MORE) {
            Object.keys(value).forEach((key) => {
              widget.param[key] = value[key]
            })
          } else if (prop === hmUI.prop.VISIBLE) {
            widget.visible = value
          }
        }
      }

      app.hmWds.push(widget)
      return widget
    }
  }

  return hmUI
}
