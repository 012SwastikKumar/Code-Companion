import React, { useEffect, useState } from "react";
import "./Discover.css";
import DiscoverCard from "./DiscoverCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from "@mui/material/Checkbox";

const Discover = () => {
  const persons = [
    {
      id: "1",
      name: "Anjali Singh",
      branch: "CSE",
      sem: "5",
      skillList: ["ux", "ui", "c++", "java", "python"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
    {
      id: "2",
      name: "Pawan Pandey",
      branch: "BCA",
      sem: "7",
      skillList: ["ux2", "ui2", "c++2", "java2", "python2"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
    {
      id: "3",
      name: "Akshay Sai",
      branch: "Physics",
      sem: "8",
      skillList: ["python3", "java3", "c++3", "java3", "python3"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
    {
      id: "4",
      name: "Reshma Sharma",
      branch: "EEE",
      sem: "2",
      skillList: ["ux", "ui", "ui", "c++", "java", "java", "python"],
      facebookProfile: "url",
      linkedinProfile: "url",
      portfolio: "url",
      githubProfile: "url",
      whatsappContact: "91 720 XXXX 983",
    },
  ];

  const [person, setPerson] = useState(persons);

  const semesterList = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const load = {};

  // const [uiux, setUIUX] = useState(false);
  // const [webDev, setWebDev] = useState(false);
  // const [androidDev, setAndroidDev] = useState(false);
  // const [blockchain, setBlockchain] = useState(false);
  // const [ethicalHacking, setEthicalHacking] = useState(false);
  // const [softwareTesting, setSoftwareTesting] = useState(false);
  const skillList = [];
  const [skills, setSkills] = useState(skillList);

  const [branch, setBranch] = useState();
  const handleChangeRadioBranch = (e) => {
    setBranch(e.target.value);
  };

  const [company, setCompany] = useState();
  const handleChangeRadioCompany = (e) => {
    setCompany(e.target.value);
  };

  const [semester, setSemester] = useState(1);
  const handleChangeRadioSemester = (e) => {
    setSemester(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, [user, navigate]);
  return (
    <div className="discover">
      <div className="discover__body">
        <div className="left-contents">
          <form onSubmit={submitHandler}>
            <div className="left__head">
              <h2>Filters</h2>
            </div>
            <div className="filter__container">
              <h3>Skills</h3>
              <div className="skillList">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="UI/UX"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Web Development"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Android Development"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Blockchain Development"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Ethical Hacking"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Software Testing"
                  />
                </FormGroup>
              </div>
            </div>

            <div className="filter__container">
              <h3>Company</h3>
              <div className="companyList">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={company}
                    onChange={handleChangeRadioCompany}
                  >
                    <FormControlLabel
                      value="amazon"
                      control={<Radio />}
                      label="Amazon"
                    />
                    <FormControlLabel
                      value="apple"
                      control={<Radio />}
                      label="Apple"
                    />
                    <FormControlLabel
                      value="facebook"
                      control={<Radio />}
                      label="Facebook"
                    />
                    <FormControlLabel
                      value="flipkart"
                      control={<Radio />}
                      label="Flipkart"
                    />
                    <FormControlLabel
                      value="google"
                      control={<Radio />}
                      label="Google"
                    />
                    <FormControlLabel
                      value="microsoft"
                      control={<Radio />}
                      label="Microsoft"
                    />
                    <FormControlLabel
                      value="paytm"
                      control={<Radio />}
                      label="Paytm"
                    />
                    <FormControlLabel
                      value="any"
                      control={<Radio />}
                      label="Any"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className="filter__container">
              <h3>Branch</h3>
              <div className="branchList">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={branch}
                    onChange={handleChangeRadioBranch}
                  >
                    <FormControlLabel
                      value="computer"
                      control={<Radio />}
                      label="Computer Science"
                    />
                    <FormControlLabel
                      value="mechanical"
                      control={<Radio />}
                      label="Mechanical"
                    />
                    <FormControlLabel
                      value="electronics"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="electrical"
                      control={<Radio />}
                      label="Electrical"
                    />
                    <FormControlLabel
                      value="chemical"
                      control={<Radio />}
                      label="Chemical"
                    />
                    <FormControlLabel
                      value="biotech"
                      control={<Radio />}
                      label="Biotech"
                    />
                    <FormControlLabel
                      value="textile"
                      control={<Radio />}
                      label="Textile"
                    />
                    <FormControlLabel
                      value="any"
                      control={<Radio />}
                      label="Any"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className="filter__container">
              <h3>Semester</h3>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={semester}
                  onChange={handleChangeRadioSemester}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel
                    value="9"
                    control={<Radio />}
                    label="Pass Out"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <button className="search-btn u-margin-top-medium " type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="right-contents">
          {persons.map((person, index) => {
            return (
              <DiscoverCard
                key={index}
                id={person.id}
                name={person.name}
                branch={person.branch}
                sem={person.sem}
                skillList={person.skillList}
                facebookProfile={person.facebookProfile}
                linkedinProfile={person.linkedinProfile}
                portfolio={person.portfolio}
                githubProfile={person.githubProfile}
                whatsappContact={person.whatsappContact}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
