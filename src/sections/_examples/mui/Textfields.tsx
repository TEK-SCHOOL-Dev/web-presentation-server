import { useState } from 'react';
// @mui
import {
  MenuItem,
  TextField,
  Typography,
  Box,
  Slider,
  Select,
  Checkbox,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  Grid,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import {
  DatePicker,
  StaticDatePicker,
  MobileDatePicker,
  DesktopDatePicker,
} from '@mui/x-date-pickers';
// components
import Iconify from '../../../components/iconify';
//
import { Block } from '../Block';

// ----------------------------------------------------------------------

const STATES = [
  { value: 'Virginia', label: 'Virginia' },
  { value: 'Ohio', label: 'Ohio' },
  { value: 'Pennsylvania', label: 'Pennsylvania' },
  { value: 'New York', label: 'New York' },
  { value: 'Michigan', label: 'Michigan' },
  { value: 'Washington', label: 'Washington' },
];

const marks = [
  { value: 0, label: 'Beginner' },
  { value: 1, label: 'Intermediate' },
  { value: 2, label: 'Advanced' },
];

const COUNTRIES = [
  { value: 'United States', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Spain', label: 'Spain' },
];

const IDTYPES = [
  { value: 'Passport', label: 'Passport' },
  { value: 'Driving License', label: 'Driving License' },
  { value: 'National ID', label: 'National ID' },
];

const HighestEducationLevel = [
  { value: 'High School', label: 'High School' },
  { value: 'Associate Degree', label: 'Associate Degree' },
  { value: 'Bachelor Degree', label: 'Bachelor Degree' },
  { value: 'Master Degree', label: 'Master Degree' },
  { value: 'Doctorate', label: 'Doctorate' },
  { value: 'other', label: 'other' },
];

const style = {
  '& > *': { my: '8px !important' },
};

// ----------------------------------------------------------------------

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

type Props = {
  variant?: 'filled' | 'outlined' | 'standard';
};

export default function PersonalInformation({ variant }: Props) {
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('United States');
  const [state, setState] = useState('Virginia');
  const [idType, setIdType] = useState('National ID');
  const [value, setValue] = useState<Date | null>(new Date());

  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleChangeIdType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdType(event.target.value);
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <Block title="General" sx={style}>
        <TextField variant={variant} required fullWidth label="First Name" />

        <TextField variant={variant} fullWidth label="Middle Name (optional)" />

        <TextField variant={variant} required fullWidth label="Last Name" />

        <DesktopDatePicker
          label="Date of Birth"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
        />

        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="row-radio-buttons-group"
            value={gender}
            onChange={handleChangeGender}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
      </Block>

      <Block title="Contact Details" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Phone Number" />
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Email" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField variant={variant} fullWidth label="Street" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              select
              fullWidth
              label="State/Province"
              value={state}
              onChange={handleChangeState}
            >
              {STATES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              select
              fullWidth
              label="Country"
              value={country}
              onChange={handleChangeCountry}
            >
              {COUNTRIES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="City" />
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Postal/ZIP Code" />
          </Grid>
        </Grid>
      </Block>

      <Block title="Contact Details" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              select
              fullWidth
              label="Identification Type"
              value={idType}
              onChange={handleChangeIdType}
            >
              {IDTYPES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="ID Number" type="number" />
          </Grid>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="Expiration Date"
              value={value}
              minDate={new Date('2017-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Postal/ZIP Code" />
          </Grid>
        </Grid>
      </Block>
    </Masonry>
  );
}

export function AcademicBackgroundForm({ variant }: Props) {
  const [education, seteducation] = useState('High School');
  const [value, setValue] = useState<Date | null>(new Date());
  const [fieldExperience, setFieldExperience] = useState('no');
  const [programInterest, setProgramInterest] = useState('no');
  const [attendedCourses, setAttendedCourses] = useState('no');
  const [reading, setReading] = useState(1);
  const [writing, setWriting] = useState(1);
  const [speaking, setSpeaking] = useState(1);

  const handleEducation = (event: React.ChangeEvent<HTMLInputElement>) => {
    seteducation(event.target.value);
  };

  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <Block title="Relevant Knowledge" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              1. Do you have prior experience in the chosen program field?
            </Typography>
            <RadioGroup
              value={fieldExperience}
              onChange={(event) => setFieldExperience(event.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {fieldExperience === 'yes' && (
              <Box mt={2}>
                <TextField fullWidth label="Please describe briefly" />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              2. Do you have specific topics or concepts within the program of interest?
            </Typography>
            <RadioGroup
              value={programInterest}
              onChange={(event) => setProgramInterest(event.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {programInterest === 'yes' && (
              <Box mt={2}>
                <TextField fullWidth label="Please describe briefly" />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              3. Have you attended past relevant courses or workshops?
            </Typography>
            <RadioGroup
              value={attendedCourses}
              onChange={(event) => setAttendedCourses(event.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {attendedCourses === 'yes' && (
              <Box mt={2}>
                <TextField fullWidth label="Please describe briefly (optional)" />
              </Box>
            )}
          </Grid>
        </Grid>
      </Block>

      <Block title="Education" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              select
              fullWidth
              label="Education Level"
              value={education}
              onChange={handleEducation}
            >
              {HighestEducationLevel.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Filed of Study (optional)" />
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Institution Name (optional)" />
          </Grid>
          <Grid item xs={6}>
            <DesktopDatePicker
              label="Graduation Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Reading
            </Typography>
            <Slider
              value={reading}
              onChange={(event, newValue) => setReading(newValue as number)}
              aria-labelledby="reading-slider"
              step={1}
              marks={marks}
              min={0}
              max={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Writing
            </Typography>
            <Slider
              value={writing}
              onChange={(event, newValue) => setWriting(newValue as number)}
              aria-labelledby="writing-slider"
              step={1}
              marks={marks}
              min={0}
              max={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Speaking
            </Typography>
            <Slider
              value={speaking}
              onChange={(event, newValue) => setSpeaking(newValue as number)}
              aria-labelledby="speaking-slider"
              step={1}
              marks={marks}
              min={0}
              max={2}
            />
          </Grid>
        </Grid>
      </Block>

      <Block title="Experience " sx={style}>
        <Grid container spacing={3}>
          <TextField
            variant={variant}
            rows={4}
            fullWidth
            multiline
            label="Brief Professional Experience Summary "
          />
        </Grid>
      </Block>
    </Masonry>
  );
}

export function ExpectationsAndCommitment({ variant }: Props) {
  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <Block title="Program Expectations" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Program expectations" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              fullWidth
              label="Weekly study hours "
              type="number"
              inputProps={{
                min: 0,
                max: 99,
                step: 1,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField variant={variant} fullWidth label="Program goals" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant={variant}
              rows={4}
              fullWidth
              multiline
              label="Study Plan and Method"
            />
          </Grid>
        </Grid>
      </Block>
    </Masonry>
  );
}

export function Resources({ variant }: Props) {
  const [device, setDevice] = useState('');
  const [secondMonitor, setSecondMonitor] = useState(false);
  const [internetSpeed, setInternetSpeed] = useState('');
  const [quietSpace, setQuietSpace] = useState(false);
  const [timeInvestment, setTimeInvestment] = useState('');

  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <Block title="Equipment" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              select
              variant={variant}
              fullWidth
              label="Course Device"
              value={device}
              onChange={(event) => setDevice(event.target.value)}
            >
              <MenuItem value="Windows PC">Windows PC</MenuItem>
              <MenuItem value="Mac">Mac</MenuItem>
              <MenuItem value="Linux">Linux</MenuItem>
              <MenuItem value="Chromebook">Chromebook</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondMonitor}
                  onChange={(event) => setSecondMonitor(event.target.checked)}
                />
              }
              label="Do you own a second monitor?"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant={variant}
              fullWidth
              label="Internet Connection Speed"
              value={internetSpeed}
              onChange={(event) => setInternetSpeed(event.target.value)}
            >
              <MenuItem value="Basic">Basic</MenuItem>
              <MenuItem value="Average">Average</MenuItem>
              <MenuItem value="High-Speed">High-Speed</MenuItem>
              <MenuItem value="Unsure">Unsure</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Block>
      <Block title="Study Space" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={quietSpace}
                  onChange={(event) => setQuietSpace(event.target.checked)}
                />
              }
              label="Quiet space or dedicated workstation for studying?"
            />
          </Grid>
        </Grid>
      </Block>
      <Block title="Time Investment" sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant={variant}
              fullWidth
              label="Weekly time investment for the program"
              value={timeInvestment}
              onChange={(event) => setTimeInvestment(event.target.value)}
              type="number"
              inputProps={{
                min: 0,
                max: 99,
                step: 1,
              }}
            />
          </Grid>
        </Grid>
      </Block>
    </Masonry>
  );
}
