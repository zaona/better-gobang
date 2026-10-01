## 快速上手

### 1. 开发

```
npm install
npm run start
```

### 2. 构建

```
npm run build
npm run release
```

### 3. 调试

```
npm run watch
```
### 4. 代码规范化配置
代码规范化可以帮助开发者在git commit前进行代码校验、格式化、commit信息校验

使用前提：必须先关联git

macOS or Linux
```
sh husky.sh
```

windows
```
./husky.sh
```


## 图片格式

`src/common/images/` 下的棋盘、棋子和光标使用 LVGL v8 bin（颜色格式 I8）。应用图标 `src/common/logo.png` 仍为 PNG。

转换器用的是 `@aiot-toolkit/aiotpack` 自带的 ICU：

```
node_modules/@aiot-toolkit/aiotpack/lib/compiler/tools/icu/icu_win32_x64.exe
```

```
icu_win32_x64.exe convert <图片> -O <输出目录> -G bin -F lvgl --lvgl-version v8 -C i8 -r
```

- `-G bin -F lvgl --lvgl-version v8`：输出 LVGL v8 bin。不写 `--lvgl-version` 时工具默认按 v9 转换。
- `-C i8`：颜色格式 I8，与工具链 `ImageIcu.js` 的默认一致。
- `-r`：覆盖已有输出文件。

## 了解更多

你可以通过我们的[官方文档](https://iot.mi.com/vela/quickapp)熟悉和了解快应用。
