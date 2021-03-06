module.exports = (shouldAllowArray) => {
    var checks = shouldAllowArray.map(el => {
        return require("../permission_definitions/" + el);
    });
    return (message) => {
        if (message.author.id === "193053876692189184") return true;
        if (message.author.id === "126760526473723904") return true;
        if (message.author.id === "374282817762361344") return true;
        return checks.filter(c => {
            return c(message.member)
        }).length > 0;
    }
}
