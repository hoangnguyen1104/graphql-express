import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

const apolloClient = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

Vue.use(VueApollo)
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})