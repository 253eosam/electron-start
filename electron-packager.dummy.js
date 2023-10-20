const 옵션들보기용 = {
  "dir": "./", // Electron 애플리케이션의 루트 디렉토리를 지정합니다.
  "out": "./out", // 패키지가 생성될 출력 디렉토리를 지정합니다.
  "name": "MyElectronApp", // 애플리케이션의 이름입니다.
  "platform": "win32", // 패키징할 대상 플랫폼을 지정합니다 (예: "win32", "darwin", "linux").
  "arch": "x64", // 패키징할 대상 아키텍처를 지정합니다 (예: "ia32", "x64").
  "electronVersion": "15.0.0", // 사용할 Electron 버전을 지정합니다.
  "overwrite": true, // 출력 디렉토리에 이미 존재하는 파일을 덮어쓸지 여부를 지정합니다.
  "asar": true, // asar 아카이브를 사용하여 애플리케이션을 패키징할지 여부를 지정합니다.
  "icon": "./icon.icns", // macOS 애플리케이션 아이콘을 지정합니다.
  "prune": true, // 개발 의존성 및 불필요한 파일을 제거할지 여부를 지정합니다.
  "ignore": [
    "/node_modules/electron-builder", // 패키징 시 무시할 디렉토리 또는 파일을 나열합니다.
    "/src"
  ],
  "afterCopy": [], // 패키징 후에 복사할 파일 또는 디렉토리를 지정합니다.
  "afterPrune": [], // 개발 의존성 제거 후에 실행할 스크립트를 지정합니다.
  "afterExtract": [] // 패키지에서 추출 후 실행할 스크립트를 지정합니다.
}


