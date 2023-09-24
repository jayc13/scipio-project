import ApiService from './ApiService'
import { BankAccountDataType, CurrencyDataType } from '@/@types/system'

export async function apiGetBankAccountList(): Promise<unknown[]> {
    const { data } = await ApiService.fetchData<unknown[]>({
        url: '/bank-accounts',
        method: 'get',
    })
    return data
}

export async function apiCreateBankAccount(body: {
    accountName: string
    accountNumber: string
    accountBalance: number
    accountBankId: string
    accountCurrency: CurrencyDataType
}): Promise<BankAccountDataType> {
    const { data } = await ApiService.fetchData<BankAccountDataType>({
        url: '/bank-accounts',
        method: 'post',
        data: body,
    })
    return data
}

export async function apiUpdateBankAccount(
    body: BankAccountDataType,
): Promise<BankAccountDataType> {
    const { data } = await ApiService.fetchData<BankAccountDataType>({
        url: `/bank-accounts/${body.id}`,
        method: 'put',
        data: body,
    })
    return data
}

export async function apiDeleteBankAccount(
    bankAccountId: string,
): Promise<BankAccountDataType> {
    const { data } = await ApiService.fetchData<BankAccountDataType>({
        url: `/bank-accounts/${bankAccountId}`,
        method: 'delete',
    })
    return data
}