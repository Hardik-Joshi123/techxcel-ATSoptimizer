import type { ResumeData } from "@/types/resume"

interface ChronologicalTemplateProps {
  data: ResumeData
}

export default function ChronologicalTemplate({ data }: ChronologicalTemplateProps) {
  const { personalInfo, experience, education, skills, styles = {}, customSections = [] } = data

  // Default styles if not provided
  const {
    fontFamily = "'Arial', sans-serif",
    fontSize = 12,
    lineHeight = 1.5,
    primaryColor = "#374151",
    showBorders = true,
    spacing = 24,
    hiddenSections = [],
  } = styles

  return (
    <div className="max-w-[800px] mx-auto" style={{ fontFamily }}>
      <header className="mb-8">
        <h1
          className="text-3xl font-bold mb-2 text-center"
          style={{
            fontSize: `${fontSize * 2}px`,
            color: primaryColor,
          }}
        >
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p
          className="text-xl text-center mb-3"
          style={{
            fontSize: `${fontSize * 1.5}px`,
          }}
        >
          {personalInfo.title || "Professional Title"}
        </p>
        <div
          className="flex justify-center flex-wrap gap-4 text-sm"
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {!hiddenSections.includes("summary") && personalInfo.summary && (
        <section
          className="mb-6"
          style={{
            marginBottom: `${spacing}px`,
          }}
        >
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontSize: `${fontSize * 1.33}px`,
              color: primaryColor,
              borderBottom: showBorders ? `1px solid ${primaryColor}` : "none",
              paddingBottom: "8px",
            }}
          >
            Professional Summary
          </h2>
          <p
            className="text-sm"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight,
            }}
          >
            {personalInfo.summary}
          </p>
        </section>
      )}

      {!hiddenSections.includes("experience") && experience && experience.length > 0 && (
        <section
          className="mb-6"
          style={{
            marginBottom: `${spacing}px`,
          }}
        >
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontSize: `${fontSize * 1.33}px`,
              color: primaryColor,
              borderBottom: showBorders ? `1px solid ${primaryColor}` : "none",
              paddingBottom: "8px",
            }}
          >
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: `${fontSize * 1.17}px`,
                    }}
                  >
                    {job.position}
                  </h3>
                  <span
                    className="text-sm"
                    style={{
                      fontSize: `${fontSize * 0.9}px`,
                    }}
                  >
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
                <p
                  className="font-medium mb-2"
                  style={{
                    fontSize: `${fontSize}px`,
                  }}
                >
                  {job.company}
                </p>
                <p
                  className="text-sm whitespace-pre-line"
                  style={{
                    fontSize: `${fontSize}px`,
                    lineHeight,
                  }}
                >
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {!hiddenSections.includes("education") && education && education.length > 0 && (
        <section
          className="mb-6"
          style={{
            marginBottom: `${spacing}px`,
          }}
        >
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontSize: `${fontSize * 1.33}px`,
              color: primaryColor,
              borderBottom: showBorders ? `1px solid ${primaryColor}` : "none",
              paddingBottom: "8px",
            }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: `${fontSize * 1.08}px`,
                    }}
                  >
                    {edu.degree} in {edu.fieldOfStudy}
                  </h3>
                  <span
                    className="text-sm"
                    style={{
                      fontSize: `${fontSize * 0.9}px`,
                    }}
                  >
                    {edu.graduationDate}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{
                    fontSize: `${fontSize}px`,
                  }}
                >
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {!hiddenSections.includes("skills") && skills && skills.length > 0 && (
        <section>
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontSize: `${fontSize * 1.33}px`,
              color: primaryColor,
              borderBottom: showBorders ? `1px solid ${primaryColor}` : "none",
              paddingBottom: "8px",
            }}
          >
            Skills
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-2"
            style={{
              fontSize: `${fontSize}px`,
            }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: primaryColor,
                  }}
                ></div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map((section) => (
        <section
          key={section.id}
          className="mt-6"
          style={{
            marginTop: `${spacing}px`,
          }}
        >
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontSize: `${fontSize * 1.33}px`,
              color: primaryColor,
              borderBottom: showBorders ? `1px solid ${primaryColor}` : "none",
              paddingBottom: "8px",
            }}
          >
            {section.title}
          </h2>
          <p
            className="text-sm whitespace-pre-line"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight,
            }}
          >
            {section.content}
          </p>
        </section>
      ))}
    </div>
  )
}

