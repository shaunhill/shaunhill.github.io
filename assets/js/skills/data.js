function getData() {
    RATIO = 1.5;
    var sub_skills = [];
    var core_skills = [
        {
            "text": "Programming",
            "proficiency": 65,
            "years": 3,
            "children": [
                {
                    "text": "Python",
                    "proficiency": 70,
                    "years": 2

            },
                {
                    "text": "Java",
                    "proficiency": 65,
                    "years": 2
            },
                {
                    "text": "ABAP",
                    "proficiency": 75,
                    "years": 3
            },
                {
                    "text": "Javascript",
                    "proficiency": 58,
                    "years": 1
            },
                {
                    "text": "R",
                    "proficiency": 65,
                    "years": 2
            }]
    },
        {
            "text": "Visualization / Reporting",
            "proficiency": 77,
            "years": 3,
            "children": [
                {
                    "text": "d3.js",
                    "proficiency": 55,
                    "years": 1

            },
                {
                    "text": "GGplot",
                    "proficiency": 65,
                    "years": 2
            },
                {
                    "text": "SAP Design Studio",
                    "proficiency": 75,
                    "years": 1
            },
                {
                    "text": "Crystal Reports",
                    "proficiency": 70,
                    "years": 2
            },
                {
                    "text": "SSRS",
                    "proficiency": 70,
                    "years": 2
            },
                {
                    "text": "Qlikview",
                    "proficiency": 50,
                    "years": 1
            },
                {
                    "text": "Tableau",
                    "proficiency": 20,
                    "years": 1
            },
//                {
//                    "text": "matplotlib",
//                    "proficiency": 50,
//                    "years": 2
//            },
                {
                    "text": "Google Charts",
                    "proficiency": 20,
                    "years": 1
            },
                {
                    "text": "SAP Web Intellegnce",
                    "proficiency": 75,
                    "years": 2
            }]
    },
        {
            "text": "Processing / ETL",
            "proficiency": 85,
            "years": 6,
            "children": [
                {
                    "text": "SAP BW",
                    "proficiency": 85,
                    "years": 4
            },
                {
                    "text": "SSIS",
                    "proficiency": 70,
                    "years": 2
            },
                {
                    "text": "T-SQL",
                    "proficiency": 82,
                    "years": 6
            },
                {
                    "text": "MongoDB",
                    "proficiency": 65,

                    "years": 1
            },
                {
                    "text": "Apache Hadoop",
                    "proficiency": 20,
                    "years": 1
            },
//                {
//                    "text": "Map Reduce",
//                    "proficiency": 60,
//                    "years": 1
//            },
                {
                    "text": "Apache Spark",
                    "proficiency": 20,
                    "years": 1
            },
                {
                    "text": "Apache Kafka",
                    "proficiency": 20,
                    "years": 1
            },
                {
                    "text": "Nvida Cuda",
                    "proficiency": 20,
                    "years": 1
            }
//                {
//                    "text": "ABAP",
//                    "proficiency": 75,
//                    "years": 4
//            }
            ]
    },
        {
            "text": "Analisys / Profiling",
            "proficiency": 75,
            "years": 6,
            "children": [
                {
                    "text": "ABAP",
                    "proficiency": 75,
                    "years": 4
            },
                {
                    "text": "R",
                    "proficiency": 65,
                    "years": 2
            },
                {
                    "text": "Python",
                    "proficiency": 65,
                    "years": 2
            },
                {
                    "text": "MongoDB",
                    "proficiency": 60,
                    "years": 1
            },
                {
                    "text": "T-SQL",
                    "proficiency": 85,
                    "years": 6
            },
                {
                    "text": "SAP AAOE",
                    "proficiency": 80,
                    "years": 3
            },
                {
                    "text": "Mirosoft Excel",
                    "proficiency": 80,
                    "years": 6
            }
            ]
    },
        {
            "text": "Web Development",
            "proficiency": 50,
            "years": 1,
            "children": [
                {
                    "text": "HTML",
                    "proficiency": 50,
                    "years": 1
            },
                {
                    "text": "bootstrap",
                    "proficiency": 55,
                    "years": 1
            },
                {
                    "text": "CSS",
                    "proficiency": 40,
                    "years": 1
            },
                {
                    "text": "Javascript",
                    "proficiency": 50,
                    "years": 1
            },
                {
                    "text": "JQuery",
                    "proficiency": 50,
                    "years": 1
            },
                {
                    "text": "PHP",
                    "proficiency": 30,
                    "years": 1
            },
                {
                    "text": "d3.js",
                    "proficiency": 55,
                    "years": 1
            }
            ]

    }, {
            "text": "Design / Modeling",
            "proficiency": 70,
            "years": 5,
            "children": [
                {
                    "text": "Web Design",
                    "proficiency": 30,
                    "years": 1
            },
                {
                    "text": "Data Warehousing Design",
                    "proficiency": 80,
                    "years": 6
            },
//                {
//                    "text": "Database Design",
//                    "proficiency": 75,
//                    "years": 3
//            },
                {
                    "text": "Software Design",
                    "proficiency": 65,
                    "years": 1
            }]
    }

]

    core_skills.forEach(function (d1, i1) {
        d1.children.forEach(function (d2, i2) {
            var skill = sub_skills.filter(function (d3) {
                    return d3.text == d2.text;
                })[0]
                //               debugger;
            if (skill != undefined) {
                skill.children.push(d1)
            } else {
                skill = {
                    "text": d2.text,
                    "proficiency": d2.proficiency,
                    "years": d2.years,
                    "children": [d1]

                };
                sub_skills.push(skill);
            }
            d1.children[i2] = Object(skill);
        })
    })


    return [core_skills, sub_skills]
}
