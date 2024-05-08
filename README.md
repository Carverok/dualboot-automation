# dualboot-automation
Playwright automation project for https://www.demoblaze.com/index.html

## System requirements
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

### Testing
```sh
# Install dependencies
npm init
```

```sh
# To all the tests run:
npx playwright test
```
```sh
# To log in scenario run:
npx playwright test -g '@verifyLogin'
```

```sh
# To purchase a product scenario run:
npx playwright test -g '@purchaseProduct'
```

```sh
# To verify categories scenario run:
npx playwright test -g '@verifyCategories'
```

```sh
# To verify log in error scenario run:
npx playwright test -g '@verifyLoginError'
```

```sh
# To open last HTML report run:
npx playwright show-report
```