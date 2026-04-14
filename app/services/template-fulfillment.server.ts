import type {
	PaymentFulfillmentContext,
	TemplateFulfillmentResult,
} from "~/services/payment-fulfillment.server";

export async function fulfillTemplateEntitlement(
	context: PaymentFulfillmentContext,
): Promise<TemplateFulfillmentResult> {
	return {
		businessEntity: "payment_entitlements",
		businessRecordId: context.entitlement.id,
		accessLabel: "Paid access granted",
		summary: "Recorded the paid entitlement in the default template flow.",
	};
}
