const dictionary = {
    "rootId": "habitat026",
    "openmct": {
        "OutsideSensors": {
            "type": "folder",
            "name": "OutsideSensors",
            "location": "habitat026"
        },
        "Habitat1Sensors": {
            "type": "folder",
            "name": "Habitat1Sensors",
            "location": "habitat026"
        },
        "Habitat2Sensors": {
            "type": "folder",
            "name": "Habitat2Sensors",
            "location": "habitat026"
        },
        "AirlockSensors": {
            "type": "folder",
            "name": "AirlockSensors",
            "location": "habitat026"
        },
        "temperature-d83b1285-b2c3-4e90-bc0f-52cae41e781e": {
            "name": "Temperature-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Celsius]",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        "pressure-81561394-a6f5-47b6-aabd-434861837fd7": {
            "name": "Pressure-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [hPa]",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        "altitude-1416a19d-ff5f-4e89-9ef8-a43977c6f210": {
            "name": "Altitude-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Meters]",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        "humidity-b0052e24-8bb8-4d42-a732-d19c4f642a7c": {
            "name": "Humidity-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [%]",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        "tvoc-3fa885bc-f90a-41f6-99af-984aa2ec6cc0": {
            "name": "TVOC-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppb]",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        "eco2-21f24631-adef-487e-837a-fcd03606bb82": {
            "name": "eCO2-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        "raw-h2-3138798d-8317-48cb-8d01-1c934d3aaf2f": {
            "name": "H2-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "raw-ethanol-a08f1a42-0120-4d84-a747-2bc86a8c7b48": {
            "name": "Ethanol-Outside",
            "type": "telemetryPoint",
            "location": "OutsideSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "temperature-ff4b8240-80d7-47cd-9ede-6d56752c88db": {
            "name": "Temperature-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Celsius]",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        "pressure-4c884c66-7e37-4140-b872-b0e4722ddde1": {
            "name": "Pressure-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [hPa]",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        "altitude-cd6b89ea-51f2-4911-8aad-bb6a339fb594": {
            "name": "Altitude-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Meters]",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        "humidity-8837e6c0-1fd6-4e6e-a3cd-da69367135a7": {
            "name": "Humidity-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [%]",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        "tvoc-97bf84a8-4810-47cf-930d-f49ca733d2c1": {
            "name": "TVOC-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppb]",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        "eco2-ad702d2d-a134-407b-9cf7-270151ee177e": {
            "name": "eCO2-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        "raw-h2-7fe15b40-7e4c-4382-8b92-ce2f019d5d31": {
            "name": "H2-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "raw-ethanol-2b01ca31-35fa-479f-a61c-ff47f6f7af5d": {
            "name": "Ethanol-Habitat1",
            "type": "telemetryPoint",
            "location": "Habitat1Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "temperature-af281f1c-c732-4443-9a67-ccf4ff9f7f68": {
            "name": "Temperature-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Celsius]",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        "pressure-3a1a0d78-56a3-4a14-a6a6-582f66276501": {
            "name": "Pressure-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [hPa]",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        "altitude-8637c07a-f715-40e6-8164-60daf3d65735": {
            "name": "Altitude-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Meters]",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        "humidity-48b738c0-009a-405a-afe9-98b5c28b4079": {
            "name": "Humidity-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [%]",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        "tvoc-4dd6d76f-896b-4ae7-8d82-b61a26762d9c": {
            "name": "TVOC-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppb]",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        "eco2-fabde604-6e05-46d0-a0ce-fbe16a65d395": {
            "name": "eCO2-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        "raw-h2-5d9bfdce-1830-400b-87b7-a51b7f73a825": {
            "name": "H2-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "raw-ethanol-b0f5f14a-c826-4715-a773-242310b5d8bb": {
            "name": "Ethanol-Habitat2",
            "type": "telemetryPoint",
            "location": "Habitat2Sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "temperature-0104fbed-e735-4a81-b694-7065807af3ed": {
            "name": "Temperature-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Celsius]",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        "pressure-90995cdf-b738-4878-813c-98da5f15e959": {
            "name": "Pressure-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [hPa]",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        "altitude-e1bd197d-a72a-446c-bcfd-a1d3981b93ea": {
            "name": "Altitude-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [Meters]",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        "humidity-01acf1e5-8f53-47a7-838e-2679ca663526": {
            "name": "Humidity-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [%]",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        "tvoc-3a350525-2500-453f-b23d-e5b02ff19b38": {
            "name": "TVOC-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppb]",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        "eco2-60730cd9-f2a0-4d88-9b38-28e2292df132": {
            "name": "eCO2-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        "raw-h2-a9abcfef-427c-4a6e-895b-adbc8398cbe7": {
            "name": "H2-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        "raw-ethanol-227e6b22-b859-420f-b47b-9e88e69541aa": {
            "name": "Ethanol-Airlock",
            "type": "telemetryPoint",
            "location": "AirlockSensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value [ppm]",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
