"use client";

import { Code, Server, Database, Zap, GitBranch, FileCode } from "lucide-react";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import TargetCursor from "../components/common/TargetCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <TargetCursor targetSelector=".cursor-target" />
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full text-center">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4">
              Nabaraj Basnet
            </h1>

            <p className="text-xl md:text-2xl text-red-600 font-semibold mb-6">
              Software Developer
            </p>

            <p className="text-md text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building modern web applications with Next.js, TypeScript, Node,
              Express, Nest.js, MongoDB. Passionate about clean code, scalable
              systems, and creating functional software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open("https://www.fitbinary.com/", "_blank");
                  }
                }}
                className="cursor-target px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
              >
                View Projects
              </button>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open(
                      "https://www.linkedin.com/in/nabaraj-basnet-1b9216248/",
                      "_blank",
                    );
                  }
                }}
                className="cursor-target px-8 py-4 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div
            style={{
              position: "relative",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <div
              style={{ height: "100%", overflowY: "auto", paddingTop: "4rem" }}
              className="border-t border-gray-200"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Technical Skills
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <Code className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Frontend
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Next.js, React, Tailwind CSS, TypeScript
                  </p>
                </div>

                {/* Backend */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <Server className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Backend</h3>
                  </div>
                  <p className="text-gray-600">Node.js, Express, NestJS</p>
                </div>

                {/* Databases */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <Database className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Databases
                    </h3>
                  </div>
                  <p className="text-gray-600">MongoDB, PostgreSQL, Supabase</p>
                </div>

                {/* Real-time & APIs */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <Zap className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Real-time & APIs
                    </h3>
                  </div>
                  <p className="text-gray-600">Socket.io, REST, GraphQL</p>
                </div>

                {/* Version Control */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <GitBranch className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Version Control
                    </h3>
                  </div>
                  <p className="text-gray-600">Git, GitHub, Collaboration</p>
                </div>

                {/* Other */}
                <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-red-600/10 transition-all text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg shadow-sm shadow-red-600/20">
                      <FileCode className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Other</h3>
                  </div>
                  <p className="text-gray-600">
                    Testing, System Design, Documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SmoothScroll>
  );
}
