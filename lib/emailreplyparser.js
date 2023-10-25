var EmailParser = require("./parser/emailparser");

class EmailReplyParser {

    constructor(RE2) {
        this.__RE2 = RE2
    }

    read(text) {
      return new EmailParser(this.__RE2).parse(text);
    }

    parseReply(text) {
      return this.read(text).getVisibleText();
    }

    parseReplied(text) {
      return this.read(text).getQuotedText();
    }
}

module.exports = EmailReplyParser;
