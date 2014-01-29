# Building

### Requirements

* Python 2.7
* VirtualEnv
* PIP
* Java 7 for Closure Compiler

## Compile on Ubuntu Saucy

```bash
$ git clone git@github.com:toxigenicpoem/henka.git
$ cd henka
$ make
```

###Install Oracle Java 7

Purge openJDK:
```bash
$ sudo apt-get purge openjdk*
```

Install dependencies:
```bash
$ sudo add-apt-repository ppa:webupd8team/java
$ sudo apt-get update
$ sudo apt-get install oracle-java7-installer
```
