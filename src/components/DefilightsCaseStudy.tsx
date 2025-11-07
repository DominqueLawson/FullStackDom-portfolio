function DefilightsCaseStudy() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header / Back link */}
      <section className="border-b border-gray-800 bg-gray-950/95 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
          >
            <span>←</span>
            <span>Back to portfolio</span>
          </a>
          <span className="text-xs uppercase tracking-[0.2em] text-purple-300">
            Case Study
          </span>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300 mb-3">
            Defilights • Airport Food Delivery
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Defilights: A cloud-native airport food delivery experience
          </h1>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-3xl">
            Defilights reimagines in-airport dining by delivering restaurant-quality meals
            directly to travelers’ gates. As founder and full stack engineer, I designed and
            built a Flutter + AWS Amplify Gen 2 platform focused on secure onboarding,
            survey-driven personalization, and scalable, serverless infrastructure.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-gray-300">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                ROLE
              </h2>
              <p className="mt-2">
                Founder • Full Stack Engineer<br />
                Product & Architecture
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                TECH STACK
              </h2>
              <p className="mt-2">
                Flutter, Riverpod 3.0<br />
                AWS Amplify Gen 2, AppSync, GraphQL<br />
                DynamoDB, Lambda, Cognito, CloudWatch
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
                FOCUS
              </h2>
              <p className="mt-2">
                Cloud-native architecture<br />
                Secure onboarding & gating<br />
                Data-driven personalization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">The Problem</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Airports are high-pressure environments where travelers have limited time and
              limited visibility into food options. Passengers often face long lines, crowded
              terminals, and poor experiences when trying to get a meal between flights.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Existing solutions rarely prioritize personalization, real-time context
              (flights, gates, time), or a truly mobile-first experience. I wanted to design
              an experience that felt like a concierge, not just another menu.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">The Solution</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Defilights gives travelers a way to browse, order, and receive food without
              leaving their gate. A tailored onboarding flow collects flight and preference
              data, then uses that to drive recommendations and airport-specific flows.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Under the hood, a serverless AWS Amplify Gen 2 backend powers secure auth,
              real-time data, and scalable APIs. The result is a cloud-native platform
              designed to support multiple airports, vendors, and evolving business logic.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture & Features */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-white">Architecture & Key Features</h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Frontend (Flutter)
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Flutter app using Riverpod 3.0 and MVVM-style architecture.</li>
                <li>
                  Multi-step onboarding wizard that collects flight, dietary, and preference
                  data in a conversational flow.
                </li>
                <li>
                  Gated experiences that unlock additional airports and features as usage
                  grows.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Backend (AWS Amplify Gen 2)
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>GraphQL APIs via AppSync with custom resolvers for complex operations.</li>
                <li>
                  DynamoDB models for users, airports, surveys, and orders, designed for
                  high-traffic, low-latency reads.
                </li>
                <li>
                  Cognito-based authentication with role-based access and feature flags
                  for future admin/vendor views.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                DevOps & Observability
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>CI/CD pipelines for app and backend deployments.</li>
                <li>CloudWatch logging and metrics for key workflows.</li>
                <li>Emphasis on test coverage and integration tests around onboarding and orders.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                Experience Design
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Copy and flows crafted to feel premium, calm, and traveler-friendly.</li>
                <li>Survey-driven personalization to inform future menu and feature decisions.</li>
                <li>
                  Architecture designed from day one for multi-airport expansion and vendor
                  onboarding.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Role & Impact */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-white">My Role</h2>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>Defined the product vision and core user journeys.</li>
              <li>
                Designed the data models and GraphQL schema for users, surveys, airports,
                and orders.
              </li>
              <li>
                Implemented the onboarding wizard, state management, and API integrations in
                Flutter.
              </li>
              <li>
                Configured IAM roles, auth rules, and Amplify resources for secure, least-privilege access.
              </li>
              <li>
                Led testing strategy and debugging sessions around transactions,
                conditional checks, and survey flows.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Impact</h2>
            <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>
                Delivered a functional MVP with a cloud-native backend ready to support
                multiple airports.
              </li>
              <li>
                Improved data operations and error handling around DynamoDB transactional
                writes and conditional checks.
              </li>
              <li>
                Established patterns for feature flags, role-based access, and real-time
                event handling that can be reused across future products.
              </li>
              <li>
                Created a codebase showcasing modern Flutter architecture combined with
                AWS serverless best practices.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons & Next Steps */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-white">Lessons & Next Steps</h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                What I Learned
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>
                  Thoughtful DynamoDB data modeling prevents painful performance issues
                  later.
                </li>
                <li>
                  Combining strong typing with clear state management (Riverpod) makes
                  complex flows easier to reason about.
                </li>
                <li>
                  Serverless backends demand discipline around observability and error handling.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                What’s Next
              </h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Predictive menu recommendations and demand modeling using ML.</li>
                <li>
                  Admin dashboards for vendors and airport partners with analytics and
                  operational controls.
                </li>
                <li>
                  Expanded user gating and loyalty features tied to flights, airports, and
                  order history.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors"
            >
              ← Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DefilightsCaseStudy;