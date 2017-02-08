//
//  WXEventModule.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 24/09/2016.
//  Copyright © 2016 com.taobao.weex. All rights reserved.
//

import Foundation

public extension WXEventModule {
    public func openURL(_ url:String) {
        var newUrl:String = url;
        if url.hasPrefix("//") {
            newUrl = String.init(format: "http://%@", url);
        }else if !url.hasPrefix("http") {
            //relative path
            newUrl = (URL.init(string: url, relativeTo: weexInstance.scriptURL)!.absoluteString)
        }
        let controller:ViewController = ViewController()
        controller.url = URL.init(string: newUrl)
        weexInstance.viewController.navigationController?.pushViewController(controller, animated:true)
    }
}
