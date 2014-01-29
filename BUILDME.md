## Building

Building henka source requires Closure Compiler.

### Closure Compiler installation from source

Install dependencies:
```bash
$ sudo apt-get install git ant openjdk-6-jdk
```

Then checkout the source from Git and build:
```bash
$ git clone https://code.google.com/p/closure-compiler/
$ cd closure-compiler
$ ant
```

To refresh your build, simply call:
```bash
$ git pull
$ ant clean
$ ant
```