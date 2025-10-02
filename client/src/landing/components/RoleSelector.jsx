import { Heart, Shield, CheckSquare } from "lucide-react";
import RoleCard from "./RoleCard";

const roles = [
  {
    title: "NGO / Community",
    description: "Manage programs and engage with your community",
    icon: Heart,
    roleParam: "ngo",
  },
  {
    title: "Administrator",
    description: "Oversee platform operations and user management",
    icon: Shield,
    roleParam: "admin",
  },
  {
    title: "Auditor",
    description: "Review and validate community impact and compliance",
    icon: CheckSquare,
    roleParam: "auditor",
  },
];

export default function RoleSelector() {
  return (
    <section id="role-selector" className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Role
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the role that best describes your involvement in the
            community. Each role has tailored features to help you make the
            greatest impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {roles.map((role) => (
            <RoleCard
              key={role.roleParam}
              title={role.title}
              description={role.description}
              icon={role.icon}
              roleParam={role.roleParam}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
