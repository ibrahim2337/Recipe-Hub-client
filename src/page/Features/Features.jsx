/* eslint-disable no-unused-vars */
import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";

const Features = () => {

    const data = [
        { name: "Justin Koslowsky", value: 19 },
        { name: "Marcus Means", value: 22 },
        { name: "Ahmad Kasdi Mohd Dahari", value: 15 },
        { name: "Michael Allemeier", value: 12 },
        { name: "Jason Ludwig", value: 19},
        { name: "Rick Laughlin", value: 15},
        
      ];

    return (
        <div>
            <div className="mt-20">
          <div className="my-10">
              <ResponsiveContainer width="100%" height={400}>
                  <PieChart width={400} height={400}>
                      <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={data}
                          cx="50%"
                          cy="50%"
                          outerRadius={150}
                          innerRadius={100}
                          fill="#3B82F6"
                          label
                      >
                          <Label
                              value=""
                              position="center"
                              fill="#3B82F6"
                              fontSize={20}
                              fontWeight={700}
                          />
                      </Pie>
                      <Tooltip />
                  </PieChart>
              </ResponsiveContainer>

              <h2 className="text-center mt-10 text-3xl font-bold text-[#3B82F6]">
                  Most Famous Chef
              </h2>
          </div>
      </div>
        </div>
    );
};

export default Features;