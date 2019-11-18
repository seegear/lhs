/* =============================== License =============================== */
//  Copyright © 2019 ezhq. All rights reserved.
// https://github.com/seegear/lhs.git

/* =============================== Env =============================== */
const fs = require('fs')
const request = require('syncrequest')
const cheerio = require('cheerio')
const log = console.log.bind(console)

/* =============================== Bsic =============================== */
class Hero {
    constructor() {
        this.nameEn = ''
        this.avatarUrl = ''
        this.infoUrl = ''
    }
}
/* =============================== Main =============================== */
const _main = () => {
    log('===>LHS Start: ')
    log('===>LHS End. Goodbye.')
    log('')
}

/* =============================== Run =============================== */
_main()