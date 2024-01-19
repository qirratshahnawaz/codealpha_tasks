import React, { useState } from 'react';
import './AgeCalculator.css'

const AgeCalculator = () => {
          const [birthdate, setBirthdate] = useState('');
          const [age, setAge] = useState(0);

          const calculateAge = () => {
                    const today = new Date();
                    const birthdateDate = new Date(birthdate);

                    let age = today.getFullYear() - birthdateDate.getFullYear();
                    const monthDiff = today.getMonth() - birthdateDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
                              age--;
                    }

                    setAge(age);
          };

          const resetCalculator = () => {
                    setBirthdate('');
                    setAge(0);
          };

          return (
                    <>
                           
                              <div className='Container'>
                              <h1 class="display-5 fw-bold text-body-emphasis">Age Calculator</h1>
                                        <div class="col-lg-6 mx-auto">
                                                  <p class="lead mb-4">The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>

                                        </div>
                                        <div className='Container_middle'>
                                                  <div className='display-5 fw-bold text-body-emphasis'>
                                                            <h4>Date of Birth</h4>
                                                            <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                                                            <div className='button_div'>
                                                                      <button className='button-65' onClick={calculateAge}>Calculate Age</button>

                                                                      <button className="button-65" onClick={resetCalculator}>
                                                                                Reset
                                                                      </button>

                                                            </div>
                                                  </div>

                                                  <div className='left'>
                                                            <div className='Container_middle_para'>
                                                                      <h1>Your Age is</h1>
                                                            </div>
                                                            <h1 className='age_heading'>{age > 0 ? ` ${age}` : ''}</h1>
                                                  </div>
                                        </div>
                              </div>
                    </>
          );
};

export default AgeCalculator;