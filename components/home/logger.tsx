import { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from "recharts";
import Papa, { ParseResult } from "papaparse";

// todo: fix display

interface DayLog {
    datetime: string;
    essential: number;
    project: number;
    social: number;
    finance: number;
    activism: number;
    spiritual: number;
    exercise: number;
}

const sampleCSVData = `
2023-07-02,1,2,2,0,0,0,0,0
2023-07-03,3,1,1,0,0,0,0,0
2023-07-04,2,2,2,0,0,0,0,0
2023-07-05,1,3,1,0,0,0,0,0
2023-07-25,2,2,1,0,1,0,0,12
`;

interface TimeLogProps{
    data: any[];
}



const TimeLog: React.FC = () => {
    const [data, setData] = useState<DayLog[] | undefined>();

    const getCSV = () => {
        Papa.parse("../../data/log.csv", {
            header: true,
            download: true,
            skipEmptyLines: true,
            delimiter: ",",
            complete: (results: ParseResult<DayLog>) => {
            setData(results)
            },
        })
    }


    useEffect(() => {
        getCSV();
        // const parsedData = sampleCSVData
        // .trim()
        // .split("\n")
        // .map((row) => {
        //     const [datetime, essential, project, social, finance, activism, spiritual, exercise, work] = row.split(",");
        //     return { datetime: new Date(datetime).toLocaleDateString(), essential: Number(essential), project: Number(project), social: Number(social), finance: Number(finance), activism: Number(activism), spiritual: Number(spiritual), exercise: Number(exercise), work: Number(work)  };
        // });
        // setData(parsedData);
    }, [])

        return (
            <>
                <p>I'm trying to achieve better work-life balance, so I am doing a public log as taking accountability for each day. My aim to make time in the day for exercise, strengthening my social bonds, activism, financial education, exercise and spiritualism</p>
                <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="datetime" />
                    <YAxis />
                    <Legend/>
                <Tooltip />
                    <Bar dataKey="essential" stackId="a" fill="#d4cba1" />
                    <Bar dataKey="project" stackId="a" fill="#beac6c" />
                    <Bar dataKey="social" stackId="a" fill="#999d74" />
                    <Bar dataKey="finance" stackId="a" fill="#879379" />
                    <Bar dataKey="activism" stackId="a" fill="#657b6d" />
                    <Bar dataKey="spiritual" stackId="a" fill="#44605f" />
                    <Bar dataKey="exercise" stackId="a" fill="#293d3c" />
                </BarChart>
            </>
        );
};

export default TimeLog;
