import { useState } from 'react';
// @mui
import {
  MenuItem,
  TextField,
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

export default function Textfields({ variant }: Props) {
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

        <TextField
          variant={variant}
          required
          fullWidth
          label="Birthdate"
          type="date"
          InputLabelProps={{ shrink: true }}
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
              renderInput={(params) => <TextField fullWidth {...params} margin="normal" />}
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
