import { Schema, Types, model, Document } from "mongoose";

export interface IAffiliateStat extends Document {
	userId: { type: Types.ObjectId; ref: string };
	affiliateSales: [Types.ObjectId];
	_doc: any;
}

const AffiliateStatSchema = new Schema<IAffiliateStat>(
	{
		userId: {
			type: Types.ObjectId,
			ref: "User",
		},
		affiliateSales: {
			type: [Types.ObjectId],
			ref: "Transaction",
		},
	},
	{ timestamps: true }
);

const AffiliateModel = model<IAffiliateStat>("AffiliateStats", AffiliateStatSchema);

export default AffiliateModel;
