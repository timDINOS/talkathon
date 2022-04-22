module.exports = {
    projects: {
        app: {
            schema: ["./database/resolver.graphql"],
            documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
        }
    }
}