import React from 'react'

import Footer from '../Footer'
import CodeBlock from '../Utilities/CodeBlock'

const SampleBlog = () => {
    return (
            <>
                <div style={{padding: '0'}}>
                    <CodeBlock 
                        language={'java'}
                        code={`
                            

                    public class RobberHouse198 {

                        
                        public static int rob(int[] nums) {
                            return rhouse(nums);
                        }


                        // tabulation approach to find the solution to the problem
                        public static int robHouse(int[] nums) {
                            int[] dp = new int[nums.length];
                            for (int i = 0; i< nums.length; i++) {
                                if (i == 0) {
                                    dp[i] = nums[i];
                                } else if(i == 1) {
                                    dp[i] = Math.max(nums[0], nums[1]);
                                } else {
                                    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
                                }
                            }
                            return dp[nums.length - 1];
                        }

                        public static void main(String[] args) {
                            int[] houses = {2,7,9,3,1};
                            int result = robHouse(houses);
                            System.out.println(result);
                        }
                    }`}
                    />
                </div>
                <Footer />
            
            </>
    )
}

export default SampleBlog
