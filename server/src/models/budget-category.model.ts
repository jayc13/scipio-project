import mongoose from 'mongoose';
import { CurrencySchema } from '@/models/currency.model';

export const BudgetCategorySchema = new mongoose.Schema(
	{
		budgetId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Budget',
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
		currencies: [{
			limit: {
				type: Number
			},
			currency: {
				type: CurrencySchema
			}
		}],
	},
	{ timestamps: false, skipVersioning: { dontVersionMe: true } },
);

export default mongoose.model('BudgetCategory', BudgetCategorySchema);
