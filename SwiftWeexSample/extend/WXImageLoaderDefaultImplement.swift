//
//  WXImageLoaderDefaultImplement.swift
//  SwiftWeexSample
//
//  Created by zifan.zx on 19/01/2017.
//  Copyright © 2017 com.taobao.weex. All rights reserved.
//

import Foundation
import WeexSDK
import Swift
import SDWebImage

class WXImageLoaderDefaultImplement:NSObject, WXImgLoaderProtocol {
    
   
    func downloadImage(withURL url: String!, imageFrame: CGRect, userInfo options: [AnyHashable : Any]! = [:], completed completedBlock: ((UIImage?, Error?, Bool) -> Void)!) -> WXImageOperationProtocol! {
        
        var temp:String
        if (url.hasPrefix("//")) {
            temp = "http:" + url;
        } else {
            temp = url;
        }
        
        let operation = SDWebImageManager.shared().downloadImage(with: URL.init(string: temp), options: SDWebImageOptions.retryFailed, progress: { (receivedSize:Int, expectedSize:Int) in
            
        }) { (image:UIImage?, error:Error?, cacheType:SDImageCacheType, finished:Bool, imageURL:URL?) in
            if (completedBlock != nil) {
                completedBlock(image, error, finished)
            }
        }
        
        return operation as? WXImageOperationProtocol
    }

}
