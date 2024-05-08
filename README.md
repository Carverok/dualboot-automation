# dualboot-automation
Automation project with Playwright framework

## System requirements
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

### Testing
# Install dependencies
npm init

# Run all the tests
npx playwright test

# Run log in scenario
npx playwright test -g '@verifyLogin'

# Run purchase a product scenario
npx playwright test -g '@purchaseProduct'

# Run verify categories scenario
npx playwright test -g '@verifyCategories'

# Run verify log in error scenario
npx playwright test -g '@verifyLoginError'