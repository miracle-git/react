const config = {
  'backgroundColor': '#ffffff',
  'textStyle': {},
  'title': {
    'textStyle': {
      'color': '#cccccc'
    },
    'subtextStyle': {
      'color': '#cccccc'
    }
  },
  'line': {
    'itemStyle': {
        'normal': {
          'borderWidth': 1
        }
    },
    'lineStyle': {
        'normal': {
          'width': 2
        }
    },
    'symbolSize': '10',
    'symbol': 'emptyCircle',
    'smooth': false
  },
  'pie': {
    'itemStyle': {
        'normal': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        },
        'emphasis': {
          'borderWidth': 0,
          'borderColor': '#ccc'
        }
    }
  },
  'categoryAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#f1f3f5'
      }
    },
    'axisTick': {
      'show': true,
      'lineStyle': {
        'color': '#f1f3f5'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#999999',
        'fontSize': '14'
      }
    },
    'splitLine': {
      'show': true,
      'lineStyle': {
        'color': [
          '#f1f3f5'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)'
        ]
      }
    }
  },
  'valueAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#f1f3f5'
      }
    },
    'axisTick': {
      'show': true,
      'lineStyle': {
        'color': '#f1f3f5'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#999999',
        'fontSize': '14'
      }
    },
    'splitLine': {
      'show': true,
      'lineStyle': {
        'color': [
          '#f1f3f5'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.3)',
          'rgba(200,200,200,0.3)'
        ]
      }
    }
  },
  'toolbox': {
    'iconStyle': {
      'normal': {
        'borderColor': '#999999'
      },
      'emphasis': {
        'borderColor': '#666666'
      }
    }
  },
  'legend': {
    'textStyle': {
      'color': '#333333'
    }
  },
  'tooltip': {
    'axisPointer': {
      'lineStyle': {
        'color': '#cccccc',
        'width': 1
      },
      'crossStyle': {
        'color': '#cccccc',
        'width': 1
      }
    }
  },
  'timeline': {
    'lineStyle': {
      'color': '#293c55',
      'width': 1
    },
    'itemStyle': {
      'normal': {
        'color': '#293c55',
        'borderWidth': 1
      },
      'emphasis': {
        'color': '#a9334c'
      }
    },
    'controlStyle': {
      'normal': {
        'color': '#293c55',
        'borderColor': '#293c55',
        'borderWidth': 0.5
      },
      'emphasis': {
        'color': '#293c55',
        'borderColor': '#293c55',
        'borderWidth': 0.5
      }
    },
    'checkpointStyle': {
      'color': '#e43c59',
      'borderColor': 'rgba(194,53,49,0.5)'
    },
    'label': {
      'normal': {
        'textStyle': {
          'color': '#293c55'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': '#293c55'
        }
      }
    }
  },
  'markPoint': {
    'label': {
      'normal': {
        'textStyle': {
          'color': '#ffffff'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': '#ffffff'
        }
      }
    }
  }
}

export default {
  default: {
    'color': [
      '#f9c700',
      '#ff5400',
      '#6699cc',
      '#9cb3c5',
      '#e0e6ec',
      '#666666',
      '#787464',
      '#cc7e63',
      '#724e58',
      '#4b565b'
    ],
    ...config
  },
  light: {
    'color': [
      '#C1232B',
      '#27727B',
      '#FCCE10',
      '#E87C25',
      '#B5C334',
      '#FE8463',
      '#9BCA63',
      '#FAD860',
      '#F3A43B',
      '#60C0DD',
      '#D7504B',
      '#C6E579',
      '#F4E001',
      '#F0805A',
      '#26C0C0'
    ],
    ...config
  }
}