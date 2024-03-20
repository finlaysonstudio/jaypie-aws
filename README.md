# Jaypie AWS 🐦‍⬛🐒

Jaypie access to AWS resources

## 📋 Usage

### Installation

```bash
npm install @jaypie/aws
```

## 📖 Reference

```javascript
import {
    getSecret,
} from '@jaypie/aws';
```

### getSecret

```javascript
import { getSecret } from '@jaypie/aws';

const secret = await getSecret("MongoConnectionStringN0NC3-nSg1bR1sh");
// secret = "mongodb+srv://username:password@env-project.n0nc3.mongodb.net/app?retryWrites=true&w=majority";
```

## 📝 Changelog

| Date       | Version | Summary        |
| ---------- | ------- | -------------- |
|  3/19/2024 |   1.0.0 | First publish with `@jaypie/core@1.0.0` |
|  3/13/2024 |   0.1.0 | Initial publish |
|  3/12/2024 |   0.0.1 | Initial commit |

## 📜 License

Published by Finlayson Studio. All rights reserved
