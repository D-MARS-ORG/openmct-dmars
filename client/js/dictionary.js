const dictionary = {
    "rootId": "habitate026",
    "openmct": {
        "telit": {
            "type": "folder",
            "name": "Telit",
            "location": "habitate026"
        },
        "sensors": {
            "type": "folder",
            "name": "Sensors",
            "location": "telit"
        },
        "acetone": {
            "name": "Accetone (C3H60)",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "PPM",
                        "format": "integer",
                        "min": 0,
                        "max": 1000000,
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "amonium": {
            "name": "Amonium (NH4+)",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "PPM",
                        "format": "integer",
                        "min": 0,
                        "max": 1000000,
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "methanol": {
            "name": "Methanol (CH30H)",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "PPM",
                        "format": "integer",
                        "min": 0,
                        "max": 1000000,
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "ethanol": {
            "name": "Ethanol (C2H5OH)",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "PPM",
                        "format": "integer",
                        "min": 0,
                        "max": 1000000,
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "co": {
            "name": "Carbon Monoxide",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "CO",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "co2": {
            "name": "Carbon Dioxide",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "CO2",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "battlevel": {
            "name": "Battery Level",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "V",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "earthquake_value": {
            "name": "Earthquake Value",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "V",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "light_value": {
            "name": "Light Value",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "lux",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "sound_value": {
            "name": "Sound Value",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "dB",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "uv_value": {
            "name": "UV Value",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "UV",
                        "format": "integer",
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "alarms": {
            "type": "folder",
            "name": "Alarms",
            "location": "telit"
        },
        "battlevelalarm": {
            "name": "Battery Level Alarm",
            "type": "telemetryPoint",
            "location": "alarms",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "format": "enum",
                        "enumerations": [
                            {
                                "string": "Good",
                                "value": 0
                            },
                            {
                                "string": "Low",
                                "value": 1
                            },
                            {
                                "string": "Critical",
                                "value": 2
                            },
                            {
                                "string": "Charging",
                                "value": 3
                            }
                        ],
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "light_sensor": {
            "name": "Light Alarm",
            "type": "telemetryPoint",
            "location": "alarms",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "format": "enum",
                        "enumerations": [
                            {
                                "string": "Very Dark Ambient Light",
                                "value": 0
                            },
                            {
                                "string": "Dark Ambient Light",
                                "value": 1
                            },
                            {
                                "string": "Bright Ambient Light",
                                "value": 2
                            },
                            {
                                "string": "Very Bright Ambient Light",
                                "value": 3
                            }
                        ],
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "accel": {
            "name": "Acceleration Alarm",
            "type": "telemetryPoint",
            "location": "alarms",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "format": "enum",
                        "enumerations": [
                            {
                                "string": "No Quakes",
                                "value": 0
                            },
                            {
                                "string": "Weak Quake",
                                "value": 1
                            },
                            {
                                "string": "Strong Quakes",
                                "value": 2
                            },
                            {
                                "string": "Very Strong Quakes",
                                "value": 3
                            }
                        ],
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "sound_sensor": {
            "name": "Sound Alarm",
            "type": "telemetryPoint",
            "location": "alarms",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "format": "enum",
                        "enumerations": [
                            {
                                "string": "No Noise",
                                "value": 0
                            },
                            {
                                "string": "Low Noise",
                                "value": 1
                            },
                            {
                                "string": "Loud Nois",
                                "value": 2
                            },
                            {
                                "string": "Very Loud Noise",
                                "value": 3
                            }
                        ],
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        },
        "uv_sensor": {
            "name": "UV Alarm",
            "type": "telemetryPoint",
            "location": "alarms",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "format": "enum",
                        "enumerations": [
                            {
                                "string": "Low UV Radiation",
                                "value": 0
                            },
                            {
                                "string": "Moderate UV Radiation",
                                "value": 1
                            },
                            {
                                "string": "High UV Radiation",
                                "value": 2
                            },
                            {
                                "string": "Very High UV Radiation",
                                "value": 3
                            },
                            {
                                "string": "VExtreme UV Radiation",
                                "value": 5
                            }
                        ],
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        }
    }
}
