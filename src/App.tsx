import React, { useState, useEffect } from "react";
import {
  Shield,
  Network,
  Lock,
  Eye,
  Users,
  Award,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Zap,
  Globe,
  Server,
  AlertTriangle,
  Star,
  Play,
  ChevronRight,
  Code,
  Database,
  Wifi,
  Activity,
  ArrowLeft,
  Layers,
  Settings,
  Monitor,
  Cloud,
  HardDrive,
  Search,
  UserCheck,
  Shield as FileShield,
  Key,
  AlertCircle,
} from "lucide-react";

type Page =
  | "home"
  | "penetration-testing"
  | "network-security"
  | "data-encryption"
  | "soc-services"
  | "secure-development"
  | "cloud-security";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [terminalText, setTerminalText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Terminal animation effect
  useEffect(() => {
    const commands = [
      "Scanning network vulnerabilities...",
      "Threat detection: ACTIVE",
      "Firewall status: SECURED",
      "Encryption level: AES-256",
      "System integrity: 100%",
    ];

    let commandIndex = 0;
    let charIndex = 0;

    const typeWriter = () => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setTerminalText(
            (prev) => prev + commands[commandIndex].charAt(charIndex)
          );
          charIndex++;
          setTimeout(typeWriter, 50);
        } else {
          setTimeout(() => {
            commandIndex++;
            charIndex = 0;
            setTerminalText((prev) => prev + "\n");
            typeWriter();
          }, 1000);
        }
      }
    };

    typeWriter();
  }, []);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: "penetration-testing",
      icon: Shield,
      title: "Penetration Testing",
      description:
        "Advanced ethical hacking and vulnerability assessments to identify security weaknesses before attackers do.",
      features: [
        "Web App Testing",
        "Network Scanning",
        "Social Engineering",
        "Compliance Reports",
      ],
    },
    {
      id: "network-security",
      icon: Network,
      title: "Network Security",
      description:
        "Comprehensive network protection with next-gen firewalls, IDS/IPS, and zero-trust architecture.",
      features: [
        "Firewall Management",
        "VPN Solutions",
        "Network Monitoring",
        "Access Control",
      ],
    },
    {
      id: "data-encryption",
      icon: Lock,
      title: "Data Encryption",
      description:
        "Military-grade encryption solutions for data at rest and in transit with key management systems.",
      features: [
        "AES-256 Encryption",
        "Key Management",
        "Database Security",
        "File Protection",
      ],
    },
    {
      id: "soc-services",
      icon: Eye,
      title: "SOC Services",
      description:
        "24/7 Security Operations Center with AI-powered threat detection and incident response.",
      features: [
        "Real-time Monitoring",
        "Threat Intelligence",
        "Incident Response",
        "Forensic Analysis",
      ],
    },
    {
      id: "secure-development",
      icon: Code,
      title: "Secure Development",
      description:
        "DevSecOps integration and secure coding practices to build security into your applications.",
      features: [
        "Code Review",
        "SAST/DAST",
        "Container Security",
        "CI/CD Integration",
      ],
    },
    {
      id: "cloud-security",
      icon: Database,
      title: "Cloud Security",
      description:
        "Multi-cloud security solutions with automated compliance and configuration management.",
      features: [
        "AWS/Azure/GCP",
        "Container Security",
        "Serverless Protection",
        "CSPM Tools",
      ],
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clients Protected",
      color: "text-blue-400",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime Guarantee",
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Threat Monitoring",
      color: "text-green-400",
    },
    {
      icon: Award,
      value: "ISO 27001",
      label: "Certified",
      color: "text-purple-400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CISO, TechCorp",
      content:
        "Cybonet transformed our security posture. Their proactive approach and expert team have been invaluable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director, FinanceFlow",
      content:
        "Outstanding service and response times. They've prevented multiple security incidents for us.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, StartupX",
      content:
        "Professional, knowledgeable, and always available. Cybonet is our trusted security partner.",
      rating: 5,
    },
  ];

  const threatTypes = [
    { name: "Malware", severity: "high", count: 1247 },
    { name: "Phishing", severity: "critical", count: 892 },
    { name: "DDoS", severity: "medium", count: 456 },
    { name: "Ransomware", severity: "critical", count: 234 },
  ];

  const navigateToService = (serviceId: string) => {
    setCurrentPage(serviceId as Page);
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    setCurrentPage("home");
    setIsMenuOpen(false);
  };

  // Solution page content
  const solutionPages = {
    "penetration-testing": {
      title: "Penetration Testing Services",
      subtitle: "Comprehensive Security Assessment & Vulnerability Testing",
      hero: "Identify vulnerabilities before attackers do with our advanced penetration testing methodologies",
      sections: [
        {
          title: "Web Application Testing",
          icon: Globe,
          description:
            "Comprehensive testing of web applications to identify OWASP Top 10 vulnerabilities and custom security flaws.",
          features: [
            "SQL Injection Testing",
            "Cross-Site Scripting (XSS)",
            "Authentication Bypass",
            "Session Management Flaws",
            "Business Logic Vulnerabilities",
            "API Security Testing",
          ],
        },
        {
          title: "Network Penetration Testing",
          icon: Network,
          description:
            "Deep network security assessment to identify infrastructure vulnerabilities and misconfigurations.",
          features: [
            "External Network Testing",
            "Internal Network Assessment",
            "Wireless Security Testing",
            "Firewall Configuration Review",
            "Port Scanning & Service Enumeration",
            "Privilege Escalation Testing",
          ],
        },
        {
          title: "Social Engineering Assessment",
          icon: Users,
          description:
            "Human factor security testing through phishing simulations and social engineering attacks.",
          features: [
            "Phishing Email Campaigns",
            "Phone-based Social Engineering",
            "Physical Security Testing",
            "USB Drop Tests",
            "Employee Security Awareness",
            "Security Training Programs",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Reconnaissance",
          description: "Information gathering and target analysis",
        },
        {
          step: "2",
          title: "Scanning",
          description: "Vulnerability identification and enumeration",
        },
        {
          step: "3",
          title: "Exploitation",
          description: "Controlled exploitation of identified vulnerabilities",
        },
        {
          step: "4",
          title: "Post-Exploitation",
          description: "Privilege escalation and lateral movement testing",
        },
        {
          step: "5",
          title: "Reporting",
          description: "Detailed findings with remediation recommendations",
        },
      ],
    },
    "network-security": {
      title: "Network Security Solutions",
      subtitle: "Advanced Network Protection & Monitoring",
      hero: "Secure your network infrastructure with enterprise-grade security solutions and 24/7 monitoring",
      sections: [
        {
          title: "Next-Generation Firewalls",
          icon: Shield,
          description:
            "Advanced firewall solutions with deep packet inspection and application-aware filtering.",
          features: [
            "Application Layer Filtering",
            "Intrusion Prevention System (IPS)",
            "SSL/TLS Inspection",
            "Advanced Threat Protection",
            "Bandwidth Management",
            "VPN Gateway Integration",
          ],
        },
        {
          title: "Network Monitoring & Analytics",
          icon: Monitor,
          description:
            "Real-time network monitoring with AI-powered threat detection and behavioral analysis.",
          features: [
            "24/7 Network Monitoring",
            "Anomaly Detection",
            "Traffic Analysis",
            "Performance Monitoring",
            "Security Event Correlation",
            "Custom Alerting Rules",
          ],
        },
        {
          title: "Zero Trust Architecture",
          icon: Lock,
          description:
            "Implement zero trust security model with micro-segmentation and identity verification.",
          features: [
            "Identity-Based Access Control",
            "Micro-Segmentation",
            "Device Authentication",
            "Continuous Verification",
            "Least Privilege Access",
            "Policy Enforcement Points",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Assessment",
          description: "Current network security posture evaluation",
        },
        {
          step: "2",
          title: "Design",
          description: "Custom security architecture design",
        },
        {
          step: "3",
          title: "Implementation",
          description: "Deployment of security solutions",
        },
        {
          step: "4",
          title: "Configuration",
          description: "Fine-tuning and optimization",
        },
        {
          step: "5",
          title: "Monitoring",
          description: "Ongoing monitoring and maintenance",
        },
      ],
    },
    "data-encryption": {
      title: "Data Encryption Solutions",
      subtitle: "Military-Grade Data Protection & Key Management",
      hero: "Protect sensitive data with advanced encryption technologies and comprehensive key management systems",
      sections: [
        {
          title: "Data-at-Rest Encryption",
          icon: HardDrive,
          description:
            "Comprehensive encryption for stored data across databases, file systems, and storage devices.",
          features: [
            "Database Encryption (TDE)",
            "File System Encryption",
            "Full Disk Encryption",
            "Cloud Storage Encryption",
            "Backup Encryption",
            "Archive Protection",
          ],
        },
        {
          title: "Data-in-Transit Protection",
          icon: Wifi,
          description:
            "Secure data transmission with end-to-end encryption and secure communication protocols.",
          features: [
            "TLS/SSL Implementation",
            "VPN Encryption",
            "Email Encryption",
            "API Security",
            "Message Queue Protection",
            "Secure File Transfer",
          ],
        },
        {
          title: "Key Management Systems",
          icon: Key,
          description:
            "Enterprise key management with hardware security modules and automated key lifecycle.",
          features: [
            "Hardware Security Modules (HSM)",
            "Key Generation & Distribution",
            "Key Rotation Automation",
            "Certificate Management",
            "Compliance Reporting",
            "Multi-tenant Support",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Data Classification",
          description: "Identify and classify sensitive data assets",
        },
        {
          step: "2",
          title: "Risk Assessment",
          description: "Evaluate data protection requirements",
        },
        {
          step: "3",
          title: "Solution Design",
          description: "Design encryption architecture",
        },
        {
          step: "4",
          title: "Implementation",
          description: "Deploy encryption solutions",
        },
        {
          step: "5",
          title: "Key Management",
          description: "Establish key lifecycle management",
        },
      ],
    },
    "soc-services": {
      title: "Security Operations Center",
      subtitle: "24/7 Threat Detection & Incident Response",
      hero: "Advanced SOC services with AI-powered threat detection and expert security analysts",
      sections: [
        {
          title: "Threat Detection & Analysis",
          icon: Search,
          description:
            "Advanced threat detection using machine learning and behavioral analytics.",
          features: [
            "SIEM/SOAR Integration",
            "Behavioral Analytics",
            "Threat Intelligence Feeds",
            "Machine Learning Detection",
            "Custom Detection Rules",
            "False Positive Reduction",
          ],
        },
        {
          title: "Incident Response",
          icon: AlertCircle,
          description:
            "Rapid incident response with forensic analysis and containment strategies.",
          features: [
            "24/7 Incident Response",
            "Forensic Investigation",
            "Malware Analysis",
            "Threat Containment",
            "Recovery Planning",
            "Lessons Learned Reports",
          ],
        },
        {
          title: "Compliance Monitoring",
          icon: FileShield,
          description:
            "Continuous compliance monitoring and reporting for regulatory requirements.",
          features: [
            "Regulatory Compliance",
            "Audit Trail Management",
            "Policy Enforcement",
            "Risk Assessment",
            "Compliance Reporting",
            "Remediation Tracking",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Onboarding",
          description: "SOC integration and baseline establishment",
        },
        {
          step: "2",
          title: "Monitoring",
          description: "Continuous security monitoring and analysis",
        },
        {
          step: "3",
          title: "Detection",
          description: "Threat identification and classification",
        },
        {
          step: "4",
          title: "Response",
          description: "Incident response and containment",
        },
        {
          step: "5",
          title: "Recovery",
          description: "System recovery and improvement",
        },
      ],
    },
    "secure-development": {
      title: "Secure Development Services",
      subtitle: "DevSecOps Integration & Secure Coding Practices",
      hero: "Build security into your development lifecycle with comprehensive DevSecOps solutions",
      sections: [
        {
          title: "Secure Code Review",
          icon: Code,
          description:
            "Comprehensive code review services to identify security vulnerabilities in source code.",
          features: [
            "Static Code Analysis (SAST)",
            "Dynamic Testing (DAST)",
            "Interactive Testing (IAST)",
            "Dependency Scanning",
            "License Compliance",
            "Security Best Practices",
          ],
        },
        {
          title: "DevSecOps Integration",
          icon: Settings,
          description:
            "Seamless integration of security tools and practices into CI/CD pipelines.",
          features: [
            "CI/CD Security Integration",
            "Automated Security Testing",
            "Container Security Scanning",
            "Infrastructure as Code Security",
            "Security Gates & Policies",
            "Continuous Compliance",
          ],
        },
        {
          title: "Security Training",
          icon: UserCheck,
          description:
            "Developer security training and secure coding best practices education.",
          features: [
            "Secure Coding Training",
            "OWASP Top 10 Education",
            "Threat Modeling Workshops",
            "Security Champions Program",
            "Hands-on Labs",
            "Certification Programs",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Assessment",
          description: "Current development security assessment",
        },
        {
          step: "2",
          title: "Integration",
          description: "Security tool integration into pipelines",
        },
        {
          step: "3",
          title: "Training",
          description: "Developer security training programs",
        },
        {
          step: "4",
          title: "Implementation",
          description: "Secure development practices deployment",
        },
        {
          step: "5",
          title: "Optimization",
          description: "Continuous improvement and optimization",
        },
      ],
    },
    "cloud-security": {
      title: "Cloud Security Solutions",
      subtitle: "Multi-Cloud Security & Compliance Management",
      hero: "Comprehensive cloud security solutions for AWS, Azure, GCP, and hybrid environments",
      sections: [
        {
          title: "Cloud Security Posture Management",
          icon: Cloud,
          description:
            "Continuous monitoring and management of cloud security configurations and compliance.",
          features: [
            "Configuration Monitoring",
            "Compliance Dashboards",
            "Risk Assessment",
            "Automated Remediation",
            "Policy Management",
            "Multi-Cloud Support",
          ],
        },
        {
          title: "Container & Kubernetes Security",
          icon: Layers,
          description:
            "Comprehensive container security from build to runtime with Kubernetes protection.",
          features: [
            "Container Image Scanning",
            "Runtime Protection",
            "Kubernetes Security",
            "Pod Security Policies",
            "Network Segmentation",
            "Secrets Management",
          ],
        },
        {
          title: "Serverless Security",
          icon: Zap,
          description:
            "Security solutions for serverless architectures and function-as-a-service platforms.",
          features: [
            "Function Security Scanning",
            "Runtime Application Protection",
            "API Gateway Security",
            "Event-driven Security",
            "Serverless Monitoring",
            "Compliance Automation",
          ],
        },
      ],
      process: [
        {
          step: "1",
          title: "Discovery",
          description: "Cloud asset discovery and inventory",
        },
        {
          step: "2",
          title: "Assessment",
          description: "Security posture and risk assessment",
        },
        {
          step: "3",
          title: "Implementation",
          description: "Security controls deployment",
        },
        {
          step: "4",
          title: "Monitoring",
          description: "Continuous monitoring and alerting",
        },
        {
          step: "5",
          title: "Optimization",
          description: "Performance and security optimization",
        },
      ],
    },
  };

  if (currentPage !== "home") {
    const solution = solutionPages[currentPage];

    return (
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <button
                onClick={navigateHome}
                className="flex items-center space-x-2"
              >
                <div className="relative">
                  <Shield className="h-8 w-8 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CYBONET
                </span>
              </button>

              <button
                onClick={navigateHome}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </header>

        {/* Solution Page Content */}
        <div className="pt-20 relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {solution.title}
                </span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">{solution.subtitle}</p>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {solution.hero}
              </p>
            </div>
          </section>

          {/* Services Sections */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {solution.sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {section.title}
                        </h3>
                        <p className="text-gray-300 mb-6">
                          {section.description}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {section.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-300"
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                <p className="text-xl text-gray-300">
                  Structured approach to deliver comprehensive security
                  solutions
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                {solution.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      {index < solution.process.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with a free security consultation and discover how
                our {solution.title.toLowerCase()} can protect your
                organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button
                  onClick={navigateHome}
                  className="border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10"
                >
                  View All Services
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield
                  className={`h-8 w-8 text-cyan-400 ${
                    glitchActive ? "animate-pulse" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
              </div>
              <span
                className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ${
                  glitchActive ? "animate-pulse" : ""
                }`}
              >
                CYBONET
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "Solutions", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative group hover:text-cyan-400 transition-all duration-300"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </nav>

            <button
              className="md:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-2 space-y-2">
              {["Home", "Services", "Solutions", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-8 animate-pulse">
                  <Zap className="h-4 w-4 mr-2" />
                  Advanced Threat Protection
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block">SECURE</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block animate-pulse">
                  THE FUTURE
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                Next-generation cybersecurity solutions powered by AI and
                machine learning. Protect your digital assets with
                military-grade security infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Security Audit
                  <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 flex items-center">
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Terminal Simulation */}
            <div className="relative">
              <div className="bg-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    cybonet@security:~$
                  </span>
                </div>
                <div className="font-mono text-sm text-green-400 h-32 overflow-hidden">
                  <pre className="whitespace-pre-wrap">{terminalText}</pre>
                  <span className="animate-pulse">█</span>
                </div>
              </div>

              {/* Floating Security Indicators */}
              <div className="absolute -top-4 -right-4 bg-green-500/20 border border-green-500/50 rounded-lg p-3 animate-bounce">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 animate-pulse">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="mb-4">
                    <Icon
                      className={`h-12 w-12 ${stat.color} mx-auto group-hover:animate-pulse`}
                    />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Real-Time Threat Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Monitor global cyber threats with our advanced AI-powered
              detection system
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Threat Map */}
            <div className="lg:col-span-2 bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Global Threat Map</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>

              <div className="relative h-64 bg-gray-900/50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe
                    className="h-32 w-32 text-cyan-400/30 animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                </div>
                {/* Simulated threat indicators */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-red-500 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Threat List */}
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Active Threats</h3>
              <div className="space-y-4">
                {threatTypes.map((threat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <AlertTriangle
                        className={`h-5 w-5 ${
                          threat.severity === "critical"
                            ? "text-red-400"
                            : threat.severity === "high"
                            ? "text-orange-400"
                            : "text-yellow-400"
                        }`}
                      />
                      <span className="font-medium">{threat.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {threat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cybersecurity Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive security services designed to protect your business
              from evolving cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-sm"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Icon className="h-7 w-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigateToService(service.id)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>

          <div className="relative">
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div>
                <div className="font-semibold text-cyan-400">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-cyan-400" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get a free cybersecurity assessment and discover how we can
              protect your digital assets
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-cyan-400">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-cyan-400">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-400">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-400">
                      Security Concerns
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                      placeholder="Describe your cybersecurity needs and concerns..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Request Security Assessment
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@cybonet.in",
                  color: "text-cyan-400",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 6383134299",
                  color: "text-green-400",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  content:
                    "11, Vaiyapuri Nagar\nKurumbapalayam SSKulam\nTamil Nadu, India",
                  color: "text-blue-400",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className={`h-6 w-6 ${contact.color}`} />
                      <h3 className="text-lg font-semibold">{contact.title}</h3>
                    </div>
                    <p className="text-gray-300 whitespace-pre-line">
                      {contact.content}
                    </p>
                  </div>
                );
              })}

              {/* Security Status */}
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Activity className="h-6 w-6 text-green-400 animate-pulse" />
                  <h3 className="text-lg font-semibold">Security Status</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Threat Level</span>
                    <span className="text-green-400">LOW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Systems Online</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Last Updated</span>
                    <span className="text-gray-400">2 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CYBONET
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Leading cybersecurity firm protecting businesses worldwide with
                advanced threat detection and response capabilities.
              </p>
              <div className="flex space-x-4">
                {[Network, Globe, Server].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-colors cursor-pointer"
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => navigateToService("penetration-testing")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Penetration Testing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToService("soc-services")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    SOC Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToService("cloud-security")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Cloud Security
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToService("network-security")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Network Security
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-cyan-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                &copy; 2024 Cybonet Security Solutions. All rights reserved.
              </p>
              <p className="text-sm mt-1">
                Protecting the digital frontier, one byte at a time.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
