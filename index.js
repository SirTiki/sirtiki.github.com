var express = require('express')

express.createServer(express.static(__dirname)).listen(8000)

