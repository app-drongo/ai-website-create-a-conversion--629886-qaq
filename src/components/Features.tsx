// Features Component
// Generated: 2025-08-28T15:23:49.768Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  Sparkles,
  Phone,
  Award,
  MapPin
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock housekeeping services to meet your hotel's demanding schedule and guest needs.",
      badge: "Service"
    },
    {
      icon: Shield,
      title: "Certified Standards",
      description: "ISO 9001 certified cleaning protocols ensuring consistent quality across all hotel areas.",
      badge: "Quality"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Experienced housekeeping staff trained in luxury hospitality standards and guest privacy.",
      badge: "Staff"
    },
    {
      icon: Star,
      title: "5-Star Experience",
      description: "Premium service delivery that maintains your hotel's reputation for excellence.",
      badge: "Excellence"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-point inspection system ensuring every room meets your exact specifications.",
      badge: "Inspection"
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning services for guest rooms, suites, and common areas.",
      badge: "Cleaning"
    },
    {
      icon: Phone,
      title: "Emergency Response",
      description: "Immediate response team for urgent housekeeping needs and guest requests.",
      badge: "Support"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning service provider trusted by leading Paris hotels and hospitality groups.",
      badge: "Recognition"
    },
    {
      icon: MapPin,
      title: "Paris Expertise",
      description: "Local expertise serving all arrondissements with knowledge of Paris hospitality standards.",
      badge: "Local"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional Housekeeping for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Paris Hospitality Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive housekeeping solutions designed specifically for luxury hotels, 
            boutique properties, and hospitality groups across Paris.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to elevate your hotel's housekeeping standards?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Quote
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}