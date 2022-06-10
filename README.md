# [Non Official] Dashlane CLI

**Note**: This project is **not** endorsed by Dashlane in any way.

## How to install

In order to build:

```
npm run build
```

In order to link:

```
npm link
```

In order to bundle for Linux-x64, macOS-x64 and Windows-x64:

```
npm run pkg
```

It outputs in `bundle` directory. Be aware you must use the same Node version as the target.

## How to use

In order to get help:

```
dcli help
```

In order to sync your vault:

```
dcli sync
```

In order to get a password:

```
dcli password [titleFilter]
```

In order to generate an OTP:

```
dcli otp [titleFilter]
```

In order to get a secured note:

```
dcli note [titleFilter]
```

## How private data is stored on the computer

See [src/crypto/README.md](src/crypto/README.md).

## Contributing

Feel free to contribute to this project, fork and pull request your ideas.
Don't include work that is not open source or not from you.

## Authors

| [![twitter/mikescops](https://avatars.githubusercontent.com/u/4266283?s=100&v=4)](http://twitter.com/mikescops 'Follow @mikescops on Twitter') | [![twitter/plhery](https://avatars.githubusercontent.com/u/4018426?s=100&v=4)](http://twitter.com/plhery 'Follow @plhery on Twitter') | ![](https://avatars.githubusercontent.com/u/52931370?v=4&s=100) |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------|
| [Corentin Mors](https://pixelswap.fr/)                                                                                                         | [Paul-Louis HERY](http://twitter.com/plhery)                                                                                          | [Jérôme Boillot](https://jerome-boillot.com/)                   |
