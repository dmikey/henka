all: package

packages: package.json
	. henka/bin/activate && \
	npm install -g grunt-cli && \
	npm install

package: grunt package.json
	. henka/bin/activate && \
	npm install

grunt: reqs
	. henka/bin/activate && \
	npm install -g grunt-cli

#setup node and npm into the virtual env
npm: reqs
	. henka/bin/activate && \
	nodeenv -p

#install nodeenv, this could be a requirements.txt if needed
reqs: cmod
	. henka/bin/activate && \
	pip install nodeenv

#set execute
cmod: venv
	chmod +x henka/bin/activate

#setup virtualenv with python, because it is awesome
venv:
	virtualenv henka --distribute --no-site-packages
