import {
    BankAccountQueryResolver,
    BankQueryResolver,
    UserQueryResolver
} from "@/graphql/resolvers/queries";

import Mutation from "@/graphql/resolvers/mutations";
import CurrencyService from "@/services/currency.service";

const resolvers = {
    Query: {
        me: async (obj: any, params: any, ctx: any) => ctx.auth,
        currencies: async () => CurrencyService.findAll()
    },
    User: UserQueryResolver,
    Bank: BankQueryResolver,
    BankAccount: BankAccountQueryResolver,
    Mutation
};
export default resolvers;
