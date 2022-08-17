import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { correctNum, incorrectNum } from "src/utils/storage";


export default function Chart() {
    // 그래프에 표시되는 맞는 갯수, 틀린 갯수 표시
    const correctQuestion = useRecoilValue(correctNum);
    const incorrectQuestion = useRecoilValue(incorrectNum);
    return(
        <ApexChart
            style={{marginLeft: '50px', marginTop : '40px'}}
            type="donut"
            width="100%"
            series={[correctQuestion,incorrectQuestion]}
            options={{
                colors : ['#3D6FF3', '#F20000'],
                series: [incorrectQuestion,incorrectQuestion],
                labels: ['O', 'X'],
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show: true,
                                total:{
                                    show:true,
                                    showAlways:true,
                                    fontSize:"24px",
                                    color:"#2787AB"
                                }
                            }
                        }
                    }
                }
            }}
        />
    )
}