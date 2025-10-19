import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 1,000 workflow executions/month",
      "5 team members",
      "Basic integrations",
      "Email support",
      "30-day history",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "99",
    description: "For growing teams with advanced needs",
    features: [
      "Up to 10,000 workflow executions/month",
      "Unlimited team members",
      "Advanced integrations",
      "Priority support",
      "Unlimited history",
      "Custom workflows",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations at scale",
    features: [
      "Unlimited workflow executions",
      "Unlimited team members",
      "All integrations",
      "Dedicated support",
      "Custom SLA",
      "SSO & advanced security",
      "Custom contracts",
      "Onboarding & training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Choose the plan that&apos;s right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border/50 ${plan.popular ? "border-accent shadow-lg shadow-accent/10" : "bg-card"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="p-6 pb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price !== "Custom" && <span className="text-4xl font-bold">${plan.price}</span>}
                  {plan.price === "Custom" && <span className="text-4xl font-bold">{plan.price}</span>}
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <Button className="mb-6 w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
