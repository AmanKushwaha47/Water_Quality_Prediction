import { Activity, Droplets, TrendingUp, MapPin, AlertTriangle, BarChart3, Brain, Database, Gauge } from 'lucide-react';
import { PredictionForm } from '../components/PredictionForm';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Droplets className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-semibold">AquaGuard AI</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          </div>
          <a href="#predict" className="px-4 py-2 md:px-6 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-block ml-auto md:ml-6">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/50 border border-blue-800 rounded-full mb-6">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">AI-Powered Early Warning System</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Predict Water-Borne Disease Outbreaks Before They Happen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced machine learning system forecasting Cholera and Typhoid outbreaks 1-3 weeks in advance, enabling proactive public health interventions.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="#dashboard" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  View Dashboard
                </a>
                <button className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-accent text-foreground rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-1">5.25M</div>
                  <div className="text-sm text-muted-foreground">Training Records</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">88.44%</div>
                  <div className="text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">9</div>
                  <div className="text-sm text-muted-foreground">Input Features</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-950/50 to-cyan-950/50 border border-teal-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Droplets className="w-6 h-6 text-teal-400" />
                  <h3 className="text-xl font-semibold">AquaShield AI</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 rounded-xl p-4 border border-teal-800/50">
                    <div className="text-3xl font-bold text-teal-400 mb-1">5.25M</div>
                    <div className="text-xs text-muted-foreground">Training Records</div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-teal-800/50">
                    <div className="text-3xl font-bold text-green-400 mb-1">88.44%</div>
                    <div className="text-xs text-muted-foreground">Model Accuracy</div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-teal-800/50">
                    <div className="text-3xl font-bold text-blue-400 mb-1">9</div>
                    <div className="text-xs text-muted-foreground">Input Features</div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-teal-800/50">
                    <div className="text-lg font-bold text-purple-400 mb-1">XGBoost</div>
                    <div className="text-xs text-muted-foreground">AI Engine</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-teal-800/50 hover:border-teal-600 transition-colors">
                    <Activity className="w-5 h-5 text-teal-400" />
                    <div className="text-sm font-medium">Real-time Prediction</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-teal-800/50 hover:border-teal-600 transition-colors">
                    <Database className="w-5 h-5 text-blue-400" />
                    <div className="text-sm font-medium">Data Explorer</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-teal-800/50 hover:border-teal-600 transition-colors">
                    <Gauge className="w-5 h-5 text-green-400" />
                    <div className="text-sm font-medium">Model Performance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Disease Surveillance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our system integrates multiple data sources and advanced AI models to provide accurate, actionable insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-teal-600 transition-colors">
              <div className="w-12 h-12 bg-teal-950/50 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predict Outbreak</h3>
              <p className="text-sm text-muted-foreground">
                Enter environmental parameters to get instant outbreak risk assessment for any region.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-950/50 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Explorer</h3>
              <p className="text-sm text-muted-foreground">
                Analyze patterns in India's waterborne disease data with 100K+ sample records.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-green-600 transition-colors">
              <div className="w-12 h-12 bg-green-950/50 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Model Performance</h3>
              <p className="text-sm text-muted-foreground">
                XGBoost classifier metrics with detailed feature importance and classification reports.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="w-12 h-12 bg-purple-950/50 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Advanced insights on water treatment, pH levels, rainfall, and temperature impacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A multi-layered approach combining data science, machine learning, and public health expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-blue-800 rounded-xl p-8">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Data Collection</h3>
                <p className="text-muted-foreground mb-4">
                  Continuous monitoring of health records, environmental sensors, and meteorological data from multiple sources.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Hospital admission records
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Water quality sensors
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    Rainfall & temperature data
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 border border-purple-800 rounded-xl p-8">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">AI Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced machine learning models process data to identify patterns and predict outbreak probabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    LSTM time-series forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    XGBoost ensemble learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    Feature importance analysis
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-950/50 to-green-900/30 border border-green-800 rounded-xl p-8">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">Early Intervention</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time alerts enable health authorities to deploy resources and implement preventive measures.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Automated alert system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Resource allocation guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Community notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Section */}
      <section id="predict" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Live Assessment Engine</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Run real-time environmental and meteorological diagnostics through the XGBoost prediction model.
            </p>
          </div>
          <PredictionForm />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Analytics Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools for prediction, data exploration, and model performance analysis.
            </p>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-teal-950/50 to-teal-900/30 border border-teal-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Database className="w-8 h-8 text-teal-400" />
                <div className="text-3xl font-bold">5.25M</div>
              </div>
              <div className="text-sm text-muted-foreground">Training Records</div>
              <div className="text-xs text-teal-400 mt-2">All states & districts</div>
            </div>
            <div className="bg-gradient-to-br from-green-950/50 to-green-900/30 border border-green-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Gauge className="w-8 h-8 text-green-400" />
                <div className="text-3xl font-bold">88.44%</div>
              </div>
              <div className="text-sm text-muted-foreground">Model Accuracy</div>
              <div className="text-xs text-green-400 mt-2">XGBoost classifier</div>
            </div>
            <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-blue-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <div className="text-3xl font-bold">9</div>
              </div>
              <div className="text-sm text-muted-foreground">Input Features</div>
              <div className="text-xs text-blue-400 mt-2">Environmental params</div>
            </div>
            <div className="bg-gradient-to-br from-purple-950/50 to-purple-900/30 border border-purple-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
                <div className="text-3xl font-bold">100K</div>
              </div>
              <div className="text-sm text-muted-foreground">Data Samples</div>
              <div className="text-xs text-purple-400 mt-2">Exploration dataset</div>
            </div>
          </div>

          {/* Feature Importance */}
          <div className="mt-6 bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-purple-950/30 border-b border-border px-6 py-4 flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">Top Feature Importance</span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Water Treatment</span>
                    <span className="text-muted-foreground">0.71</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500" style={{ width: '71%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>pH Level</span>
                    <span className="text-muted-foreground">0.16</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: '16%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Urban/Rural</span>
                    <span className="text-muted-foreground">0.057</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '5.7%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Removed */}

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-semibold">AquaGuard AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Preventing water-borne disease outbreaks through advanced AI and machine learning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 AquaGuard AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}