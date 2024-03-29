import React, { useState } from "react";
import "./Discover.css";
import DiscoverCard from "./DiscoverCard";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { toast } from "react-hot-toast";

const Discover = () => {
  const [uiux, setUIUX] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [androidDev, setAndroidDev] = useState(false);
  const [blockchain, setBlockchain] = useState(false);
  const [ethicalHacking, setEthicalHacking] = useState(false);
  const [softwareTesting, setSoftwareTesting] = useState(false);
  const [branch, setBranch] = useState("ANY");
  const [semester, setSemester] = useState(0);
  const [company, setCompany] = useState("ANY");
  const [open, setOpen] = useState(true);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const query = {};
      if (semester !== 0) query.sem = Number(semester);
      if (branch !== "ANY") query.branch = branch;
      if (company !== "ANY") query.company = company;
      if (uiux) query.uiux = uiux;
      if (webDev) query.webDev = webDev;
      if (androidDev) query.androidDev = androidDev;
      if (blockchain) query.blockchain = blockchain;
      if (ethicalHacking) query.ethicalHacking = ethicalHacking;
      if (softwareTesting) query.softwareTesting = softwareTesting;

      const config = {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/filtered-users`,
        query,
        config
      );
      if (data.users.length === 0) {
        toast.error("No users found ");
      } else {
        toast.success("Users found");
        setFilteredUsers(data.users);
      }
    } catch (error) {}
  };
  return (
    <div className="discover">
      <div className="discover__body">
      {open ?  
        <div className="left-contents">
          <form onSubmit={submitHandler}>
            <div className="left__head">
              <h2>Filters</h2>
              <div className="close_btn" onClick={(e) => {
                setOpen(!open);
              }}>
                <CloseRoundedIcon fontSize="large" />
              </div>
            </div>
            <div className="filter__container">
              <h3>Skills</h3>
              <div className="skillList">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="UI/UX"
                    onClick={(e) => {
                      setUIUX(e.target.checked);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Web Development"
                    onClick={(e) => {
                      setWebDev(e.target.checked);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Android Development"
                    onClick={(e) => {
                      setAndroidDev(e.target.checked);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Blockchain Development"
                    onClick={(e) => {
                      setBlockchain(e.target.checked);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Ethical Hacking"
                    onClick={(e) => {
                      setEthicalHacking(e.target.checked);
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Software Testing"
                    onClick={(e) => {
                      setSoftwareTesting(e.target.checked);
                    }}
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
                    onChange={(e) => setCompany(e.target.value)}
                  >
                    <FormControlLabel
                      value="AMAZON"
                      control={<Radio />}
                      label="Amazon"
                    />
                    <FormControlLabel
                      value="APPLE"
                      control={<Radio />}
                      label="Apple"
                    />
                    <FormControlLabel
                      value="FACEBOOK"
                      control={<Radio />}
                      label="Facebook"
                    />
                    <FormControlLabel
                      value="FLIPKART"
                      control={<Radio />}
                      label="Flipkart"
                    />
                    <FormControlLabel
                      value="GOOGLE"
                      control={<Radio />}
                      label="Google"
                    />
                    <FormControlLabel
                      value="MICROSOFT"
                      control={<Radio />}
                      label="Microsoft"
                    />
                    <FormControlLabel
                      value="PAYTM"
                      control={<Radio />}
                      label="Paytm"
                    />
                    <FormControlLabel
                      value="ANY"
                      control={<Radio />}
                      label="Any"
                      defaultChecked
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
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <FormControlLabel
                      value="CSE"
                      control={<Radio />}
                      label="Computer Science"
                    />
                    <FormControlLabel
                      value="ME"
                      control={<Radio />}
                      label="Mechanical"
                    />
                    <FormControlLabel
                      value="ECE"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="EEE"
                      control={<Radio />}
                      label="Electrical"
                    />
                    <FormControlLabel
                      value="CHEM"
                      control={<Radio />}
                      label="Chemical"
                    />
                    <FormControlLabel
                      value="BIOTECH"
                      control={<Radio />}
                      label="Biotech"
                    />
                    <FormControlLabel
                      value="TXT"
                      control={<Radio />}
                      label="Textile"
                    />
                    <FormControlLabel
                      value="ANY"
                      control={<Radio />}
                      label="Any"
                      defaultChecked
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
                  onChange={(e) => setSemester(e.target.value)}
                >
                  <FormControlLabel value={1} control={<Radio />} label="1" />
                  <FormControlLabel value={2} control={<Radio />} label="2" />
                  <FormControlLabel value={3} control={<Radio />} label="3" />
                  <FormControlLabel value={4} control={<Radio />} label="4" />
                  <FormControlLabel value={5} control={<Radio />} label="5" />
                  <FormControlLabel value={6} control={<Radio />} label="6" />
                  <FormControlLabel value={7} control={<Radio />} label="7" />
                  <FormControlLabel value={8} control={<Radio />} label="8" />
                  <FormControlLabel
                    value={9}
                    control={<Radio />}
                    label="Pass Out"
                  />
                  <FormControlLabel value={0} control={<Radio />} label="Any" />
                </RadioGroup>
              </FormControl>
            </div>

            <button className="search-btn u-margin-top-medium " type="submit">
              Search
            </button>
          </form>
        </div>

        : 
        <div className="menu_btn" onClick={ (e) => {
          setOpen(!open)
        }}>
                <MenuRoundedIcon fontSize="large" />
              </div>

                  }

        <div className="right-contents">
          {filteredUsers?.map((person, index) => {
            return (
              <DiscoverCard
                key={index}
                id={person?.id}
                name={person?.name}
                branch={person?.branch}
                sem={person?.sem}
                uiux={person?.uiux}
                webDev={person?.webDev}
                androidDev={person?.androidDev}
                blockchain={person?.blockchain}
                ethicalHacking={person?.ethicalHacking}
                softwareTesting={person?.softwareTesting}
                facebook={person?.facebook}
                linkedIn={person?.linkedIn}
                portfolio={person?.portfolio}
                github={person?.github}
                whatsApp={person?.whatsApp}
                src={person?.avatar?.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
