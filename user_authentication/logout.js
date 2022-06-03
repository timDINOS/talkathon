

const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}


modules.export = logout;