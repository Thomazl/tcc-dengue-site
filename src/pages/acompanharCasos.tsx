import React from 'react';

const AcompanharCasos: React.FC = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                title="Power BI Report"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiYzQyOTI4M2ItZTQwMC00ODg4LWJiNTQtODc5MzljNWIzYzg3IiwidCI6IjlhNTU0YWQzLWI1MmItNDg2Mi1hMzZmLTg0ZDg5MWU1YzcwNSJ9&pageName=ReportSectionbd7616200acb303571fc"
                frameBorder="0"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default AcompanharCasos;