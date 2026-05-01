import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Users,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">
                Available for New Opportunities
              </span>
            </div>

            <h1
              style={{ paddingBottom: "1rem" }}
              className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
            >
              Tobias Bingham
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Customer Service | Mortgage Professional
            </p>

            <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed mb-8">
              Client-focused professional with proven expertise
              in mortgage servicing, loan assistance programs,
              and customer relationship management. Skilled in
              navigating complex FHA, VA, and USDA guidelines to
              deliver results.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-1">2+</div>
                <div className="text-sm text-slate-400">
                  Years Experience
                </div>
              </div>
              <div className="h-16 w-px bg-white/20"></div>
              <div className="h-16 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl mb-1">100%</div>
                <div className="text-sm text-slate-400">
                  Client Focused
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                <a href="mailto:tobybingham12@gmail.com">
                  <Mail className="size-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a
                  href="tel:509-552-3163"
                  className="text-black"
                  style={{ color: "black" }}
                >
                  <Phone
                    className="size-4 mr-2"
                    style={{
                      color: "black",
                    }}
                  />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <a
                href="mailto:tobybingham12@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="size-4" />
                tobybingham12@gmail.com
              </a>
              <a
                href="tel:509-552-3163"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="size-4" />
                509-552-3163
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                Henderson, Nevada
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {/* Summary Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Motivated and client-focused professional with
              experience in mortgage loan servicing. Skilled in
              fostering positive environments, delivering
              exceptional customer service, and utilizing
              effective communication to achieve business goals
              while delivering satisfactory solutions for
              clients.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Proven ability in client-facing negotiation,
              employee training, and managing mortgage-related
              applications such as NewCourse, Encompass, and
              Black Knight MSP. Highly adaptable, with strong
              communication, problem-solving, and leadership
              skills, seeking to contribute to a dynamic work
              environment.
            </p>
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="size-5" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Default Specialist */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="mb-1">Default Specialist</h3>
                  <p className="text-foreground/70">
                    Village Capital & Investment
                  </p>
                </div>
                <div className="text-sm text-foreground/70 mt-1 md:mt-0 md:text-right">
                  <p>November 2025 – January 2026</p>
                  <p>Henderson, Nevada</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                <li>
                  Managed inbound and outbound calls, providing
                  clients with guidance on their mortgages and
                  available assistance programs
                </li>
                <li>
                  Educated clients on mortgage processes and
                  completed mortgage assistance applications
                  based on client hardship, in compliance with
                  FHA, VA, and USDA guidelines
                </li>
                <li>
                  Applied problem-solving skills to clarify
                  complex mortgage and assistance options for
                  clients
                </li>
                <li>
                  Leveraged strong communication skills to
                  negotiate solutions for clients with past-due
                  balances and delinquency proceedings, helping
                  mitigate risk and resolve accounts effectively
                </li>
              </ul>
            </div>

            {/* Loan Servicer */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="mb-1">Loan Servicer</h3>
                  <p className="text-foreground/70">
                    Village Capital & Investment
                  </p>
                </div>
                <div className="text-sm text-foreground/70 mt-1 md:mt-0 md:text-right">
                  <p>March 2025 – November 2025</p>
                  <p>Henderson, Nevada</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                <li>
                  Maintained expertise in mortgage servicing,
                  including managing payments and escrow
                  accounts to ensure accurate account handling
                </li>
                <li>
                  Managed inbound and outbound calls addressing
                  clients servicing inquiries related to their
                  mortgage
                </li>
                <li>
                  Coordinated with internal departments to
                  resolve client issues efficiently
                </li>
                <li>
                  Trained and mentored new employees on client
                  communication, problem resolution, and company
                  procedures
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="size-5" />
                <h3>Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">NewCourse</Badge>
                <Badge variant="secondary">
                  Black Knight MSP
                </Badge>
                <Badge variant="secondary">Encompass</Badge>
                <Badge variant="secondary">
                  POS Applications
                </Badge>
                <Badge variant="secondary">
                  90+ WPM Typing
                </Badge>
                <Badge variant="secondary">
                  Mobile & Desktop Proficiency
                </Badge>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="size-5" />
                <h3>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Communication</Badge>
                <Badge variant="outline">Problem-Solving</Badge>
                <Badge variant="outline">Adaptability</Badge>
                <Badge variant="outline">Creativity</Badge>
                <Badge variant="outline">Leadership</Badge>
                <Badge variant="outline">
                  Team Collaboration
                </Badge>
                <Badge variant="outline">
                  Willingness to Learn
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="size-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="mb-1">High School Diploma</h3>
                <p className="text-foreground/70">
                  Coronado High School
                </p>
              </div>
              <div className="text-sm text-foreground/70 mt-1 md:mt-0 md:text-right">
                <p>May 2023</p>
                <p>Henderson, Nevada</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h2 className="mb-4 text-primary-foreground">
              Let's Connect
            </h2>
            <p className="mb-6 text-primary-foreground/90">
              I'm always open to discussing new opportunities
              and challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary">
                <a href="mailto:tobybingham12@gmail.com">
                  <Mail className="size-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:509-552-3163">
                  <Phone className="size-4 mr-2" />
                  Call Me
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-foreground/50">
          <p>
            © {new Date().getFullYear()} Tobias Bingham. All
            rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}